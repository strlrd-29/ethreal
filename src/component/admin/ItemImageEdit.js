import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import MobileStepper from "@material-ui/core/MobileStepper";
//mui
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
//icons
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ClearIcon from "@material-ui/icons/Clear";

const AutoPlaySwipeableViews = SwipeableViews;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",

    flexGrow: 1,
    zIndex: 2,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 350,
    display: "block",
    width: "100%",
    overflow: "hidden",
    maxHeight: 400,
    zIndex: 1,
    // objectFit: "contain",
  },
  typeName: {
    float: "left",
    position: "absolute",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",
    bottom: 0,
    left: 0,
    right: 0,

    zIndex: 4,
  },
  typeNameDelete: {
    float: "left",
    position: "absolute",
    display: "flex",
    direction: "column",
    justifyContent: "flex-start",

    top: 110,
    right: 0,

    zIndex: 5,
  },
  changeButton: {
    float: "left",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    padding: 20,
    zIndex: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  stepper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    background: "transparent",
    display: "flex",
    justifyContent: "center",
  },

  //list images

  rootList: {
    marginBottom: 10,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    zIndex: 4,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    zIndex: 4,
  },
}));

function ItemImageEdit(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const maxSteps = props.itemImages?.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <div className={classes.rootList}>
        <GridList className={classes.gridList} cols={4} cellHeight={100}>
          {props.itemImages?.map((tile, index) => (
            <GridListTile
              key={tile}
              step={index}
              onClick={() => handleStepChange(index)}
              style={{ cursor: "pointer" }}
            >
              <img src={tile} style={{ objectFit: "contain", width: "100%" }} />
              <GridListTileBar
                style={{
                  height: "40%",
                  top: 5,
                  left: "57%",
                  backgroundColor: "transparent",
                }}
                actionIcon={
                  <IconButton
                    variant="contained"
                    size="medium"
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 40,
                      bottom: 0,
                      left: 0,
                      borderRadius: 0,
                      backgroundColor: "rgba(0,0,0,0.6)",
                      color: "white",
                    }}
                  >
                    <ClearIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>

      <Box className={classes.typeName}>
        <Button
          fullWidth
          variant="contained"
          size="large"
          style={{
            borderRadius: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            color: "white",
          }}
          startIcon={<AddAPhotoIcon />}
        >
          Add new image
        </Button>
      </Box>
      <Box className={classes.typeNameDelete}>
        <IconButton
          variant="contained"
          size="large"
          style={{
            borderRadius: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            color: "white",
          }}
          disabled={activeStep === maxSteps - 1}
        >
          <DeleteForeverIcon />
        </IconButton>
      </Box>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {props.itemImages?.map((step, index) => (
          <div key={step}>
            {Math.abs(activeStep - index) <= maxSteps ? (
              <img
                className={classes.img}
                src={step}
                alt={step}
                style={{ objectFit: "cover" }}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <div className={classes.changeButton}>
        <IconButton
          color="primary"
          variant="outlined"
          size="medium"
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight fontSize="large" />
          ) : (
            <KeyboardArrowLeft fontSize="large" />
          )}
        </IconButton>
        <IconButton
          color="primary"
          size="medium"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft fontSize="large" />
          ) : (
            <KeyboardArrowRight fontSize="large" />
          )}
        </IconButton>
      </div>
      <MobileStepper
        className={classes.stepper}
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
      />
    </div>
  );
}

export default ItemImageEdit;

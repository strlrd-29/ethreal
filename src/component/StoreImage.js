import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";


import { Info } from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";


import MobileStepper from "@material-ui/core/MobileStepper";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from 'react-swipeable-views-utils';

import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
    height: 600,
    display: "block",
    width: "100%",
    overflow: "hidden",
    maxHeight: 600,
    zIndex:1,
    //objectFit: "contain",
  },
  typeName: {
    float: "left",
    position: "absolute",
    top: 100,
    left: 0,
    padding: 20,
    zIndex: 3,
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
}));

function StoreImage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const maxSteps = props.itemImages.length;

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
      <Box className={classes.typeName}>
        <Typography
          variant="h5"
          color="textPrimary"
          style={{ display: "inline-block", borderLeft: "4px #b100e8 solid",paddingLeft:10 }}
        >
         
        </Typography>
      </Box>

      <AutoPlaySwipeableViews
        interval="6000"
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {props.itemImages.map((step, index) => (
          <div key={step}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step} alt={step} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <div className={classes.changeButton}>
        <IconButton
          color="primary"
          variant="outlined"
          size="large"
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
          size="large"
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

export default StoreImage;

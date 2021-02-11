import React from "react";

import { makeStyles } from "@material-ui/core/styles";

//components
//mui
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Divider from "@material-ui/core/Divider";

import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";

import Grid from "@material-ui/core/Grid";

//icons

import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "46%",
  },
  formControl1: {
    margin: theme.spacing(1),
    width: "96%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  itemButton: {
    marginRight: 20,
    borderRadius: 0,
    textTransform: "none",
  },
}));

export default function CreateCodeDiscount(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [checkedNew, setCheckedNew] = React.useState(false);
  const [checkedRestock, setCheckedRestock] = React.useState(false);
  const [checkedPromotion, setCheckedPromotion] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleCheckedNew = () => {
    setCheckedNew((prev) => !prev);
  };

  const toggleCheckedRestock = () => {
    setCheckedRestock((prev) => !prev);
  };

  const toggleCheckedPromotion = () => {
    setCheckedPromotion((prev) => !prev);
  };

  return (
    <div>
      <Button
        disableElevation
        className={classes.itemButton}
        value="1"
        color="secondary"
        variant="contained"
        onClick={handleClickOpen}
        // onClick={this.handleClickItems}
      >
        create Code Discount
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ style: { borderRadius: 0 } }}
        scroll="paper"
        fullWidth
        maxWidth="md"
        aria-labelledby="form-dialog-title"
      >
        <Grid container xs={12} justify="space-between">
          <DialogTitle id="form-dialog-title">Create Code Discount</DialogTitle>
          <IconButton
            aria-label="ignore"
            style={{ borderRadius: 0 }}
            onClick={handleClose}
          >
            <ClearIcon style={{ fontSize: "1.6em" }} />
          </IconButton>
        </Grid>

        <Divider />
        <DialogContent style={{ borderRadius: 0 }}>
          <Grid container xs={12}>
            <Grid container xs={12} style={{ padding: 20 }}>
              <FormControl className={classes.formControl1}>
                <TextField
                  variant="outlined"
                  margin="dense"
                  id="name"
                  label="Code"
                  type="text"
                  fullWidth
                />
              </FormControl>

              <FormControl className={classes.formControl1}>
                <TextField
                  variant="outlined"
                  margin="dense"
                  id="name"
                  label="Store title"
                  type="text"
                  fullWidth
                />
              </FormControl>

              <FormControl className={classes.formControl1}>
                <TextField
                  variant="outlined"
                  margin="dense"
                  id="name"
                  label="Description"
                  type="text"
                  fullWidth
                  multiline
                />
              </FormControl>

              <FormControlLabel
                className={classes.formControl}
                control={
                  <Switch checked={checkedNew} onChange={toggleCheckedNew} />
                }
                label="New Store"
                color="primary"
              />
              <FormControlLabel
                className={classes.formControl}
                control={
                  <Switch
                    checked={checkedRestock}
                    onChange={toggleCheckedRestock}
                  />
                }
                label="Restock Store"
              />
              <FormControlLabel
                className={classes.formControl}
                control={
                  <Switch
                    checked={checkedPromotion}
                    onChange={toggleCheckedPromotion}
                  />
                }
                label="Store in Promotion"
              />

              <FormControl className={classes.formControl}>
                <TextField
                  type="number"
                  variant="outlined"
                  margin="dense"
                  id="name"
                  label="Pourcentage %"
                />
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid container xs={12} justify="center">
            <Button
              onClick={handleClose}
              style={{ borderRadius: 0, width: "50%" }}
              color="primary"
              variant="contained"
              size="large"
            >
              Create Code Discount
            </Button>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
}

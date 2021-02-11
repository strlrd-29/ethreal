import React from "react";

import { makeStyles } from "@material-ui/core/styles";

//components
import ItemImageEdit from "./ItemImageEdit";
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

import noprogram from "../../image/noprogram.gif";

import { useDispatch, useSelector } from "react-redux";
import { addStore } from "../../redux/actions/storesActions";

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

export default function CreateStore(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [checkedNew, setCheckedNew] = React.useState(false);
  const [checkedRestock, setCheckedRestock] = React.useState(false);
  const [checkedPromotion, setCheckedPromotion] = React.useState(false);
  const [storeTitle, setStoreTitle] = React.useState("");
  const [storeDescription, setStoreDescription] = React.useState("");
  const [reference, setReference] = React.useState("");
  const [pourcentagePromotion, setPourcentagePromotion] = React.useState(0);

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
  const handleSubmit = (e) => {
    e.preventDefault();

    const newStore = {
      title: storeTitle,
      description: storeDescription,
      ref: reference,
      promotion: checkedPromotion,
      restock: checkedRestock,
      new: checkedNew,
      pourcentagePromotion: parseFloat(pourcentagePromotion),
    };
    dispatch(addStore(newStore));
    setOpen(false);
    setStoreTitle("");
    setStoreDescription("");
    setReference("");
    setCheckedRestock(false);
    setCheckedPromotion(false);
    setCheckedNew(false);
    setPourcentagePromotion(0);
  };
  if (pourcentagePromotion < 0) {
    setPourcentagePromotion(0);
  }

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
        create new Store
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
        <form onSubmit={handleSubmit}>
          <Grid container xs={12} justify="space-between">
            <DialogTitle id="form-dialog-title">Create new Store</DialogTitle>
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
              <Grid container xs={6}>
                <ItemImageEdit itemImages={[noprogram]} />
              </Grid>

              <Grid container xs={6} style={{ padding: 20 }}>
                <FormControl className={classes.formControl1}>
                  <TextField
                    variant="outlined"
                    margin="dense"
                    id="name"
                    label="Reference"
                    type="text"
                    fullWidth
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                    required
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
                    value={storeTitle}
                    onChange={(e) => setStoreTitle(e.target.value)}
                    required
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
                    value={storeDescription}
                    onChange={(e) => setStoreDescription(e.target.value)}
                    required
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
                    value={pourcentagePromotion}
                    onChange={(e) => setPourcentagePromotion(e.target.value)}
                    required
                    disabled={!checkedPromotion}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Grid container xs={12} justify="center">
              <Button
                type="submit"
                style={{ borderRadius: 0, width: "50%" }}
                color="primary"
                variant="contained"
                size="large"
              >
                Create Store
              </Button>
            </Grid>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

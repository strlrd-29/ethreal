import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import noprogram from "../../image/noprogram.gif";

import { useSelector, useDispatch } from "react-redux";

//components
import ItemImageEdit from "./ItemImageEdit";
//mui
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Divider from "@material-ui/core/Divider";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
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
import { addType } from "../../redux/actions/typesActions";

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

export default function CreateType(props) {
  const classes = useStyles();
  const { stores } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [Store, setStore] = React.useState("");
  const [reference, setReference] = React.useState("");
  const [typeTitle, setTypeTitle] = React.useState("");
  const [typeDescription, setTypeDescription] = React.useState("");
  const [checkedNew, setCheckedNew] = React.useState(false);
  const [checkedRestock, setCheckedRestock] = React.useState(false);
  const [checkedPromotion, setCheckedPromotion] = React.useState(false);
  const [pourcentagePromotion, setPourcentagePromotion] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeStore = (e) => {
    setStore(e.target.value);

    console.log(Store);
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

    const newType = {
      ref: reference,
      title: typeTitle,
      description: typeDescription,
      promotion: checkedPromotion,
      pourcentagePromotion: parseFloat(pourcentagePromotion),
      new: checkedNew,
      restock: checkedRestock,
    };
    dispatch(addType(Store, newType));
    setOpen(false);
    setCheckedNew(false);
    setCheckedPromotion(false);
    setTypeDescription("");
    setReference("");
    setTypeTitle("");
    setStore("");
    setCheckedRestock(false);
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
      >
        create new Type
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
            <DialogTitle id="form-dialog-title">Create new Type</DialogTitle>
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
                    label="Type title"
                    type="text"
                    fullWidth
                    value={typeTitle}
                    onChange={(e) => setTypeTitle(e.target.value)}
                    required
                  />
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Store
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={Store}
                    onChange={handleChangeStore}
                    label="Store"
                    required
                  >
                    {stores.map((store) => (
                      <MenuItem value={store.storeId} key={store.id}>
                        {store.title}
                      </MenuItem>
                    ))}
                  </Select>
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
                    value={typeDescription}
                    onChange={(e) => setTypeDescription(e.target.value)}
                    required
                  />
                </FormControl>

                <FormControlLabel
                  className={classes.formControl}
                  control={
                    <Switch checked={checkedNew} onChange={toggleCheckedNew} />
                  }
                  label="New Type"
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
                  label="Restock Type"
                />
                <FormControlLabel
                  className={classes.formControl}
                  control={
                    <Switch
                      checked={checkedPromotion}
                      onChange={toggleCheckedPromotion}
                    />
                  }
                  label="Type in Promotion"
                />

                <FormControl className={classes.formControl}>
                  <TextField
                    disabled={!checkedPromotion}
                    type="number"
                    variant="outlined"
                    margin="dense"
                    id="name"
                    label="Pourcentage %"
                    value={pourcentagePromotion}
                    onChange={(e) => setPourcentagePromotion(e.target.value)}
                    required
                  />
                </FormControl>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Grid container xs={12} justify="center">
              <Button
                style={{ borderRadius: 0, width: "50%" }}
                color="primary"
                variant="contained"
                size="large"
                type="submit"
              >
                Create Type
              </Button>
            </Grid>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

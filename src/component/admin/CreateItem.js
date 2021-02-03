import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../redux/actions/itemsActions";
import noProgram from "../../image/noprogram.gif";

//components
import ItemImageEdit from "./ItemImageEdit";
//mui
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Divider from "@material-ui/core/Divider";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
//icons
import EditIcon from "@material-ui/icons/Edit";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
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

export default function CreateItem(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { stores } = useSelector((state) => state);
  const { types } = useSelector((state) => state);

  const [open, setOpen] = React.useState(false);
  const [reference, setReference] = React.useState("");
  const [itemTitle, setItemTitle] = React.useState("");
  const [Store, setStore] = React.useState("");
  const [CurrentTypes, setTypes] = React.useState([]);
  const [Type, setType] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [quantity, setQuantity] = React.useState(0);
  const [price, setPrice] = React.useState(0);

  const [checkedNew, setCheckedNew] = React.useState(false);
  const [checkedRestock, setCheckedRestock] = React.useState(false);
  const [checkedPromotion, setCheckedPromotion] = React.useState(false);
  const [poucentagePromotion, setPourcentagePromotion] = React.useState(0);

  const [alert, setAlert] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeStore = (e) => {
    setStore(e.target.value);
    const CurrentTypes = types.filter((type) => type.store === e.target.value);
    setTypes(CurrentTypes);
  };

  const handleChangeType = (e) => {
    setType(e.target.value);
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
    if (Type === false) {
      setAlert(true);
    } else {
      setOpen(false);
      setAlert(false);
      const newItem = {
        ref: reference,
        title: itemTitle,
        description: description,
        price: parseFloat(price),
        quantity: parseFloat(quantity),
        promotion: checkedPromotion,
        pourcentagePromotion: parseFloat(poucentagePromotion),
        new: checkedNew,
        restock: checkedRestock,
      };
      dispatch(addItem(Type, newItem));
      setCheckedNew(false);
      setCheckedPromotion(false);
      setDescription("");
      setType("");
      setStore("");
      setReference("");
      setItemTitle("");
      setCheckedRestock(false);
      setPrice(0);
      setPourcentagePromotion(0);
      setQuantity(0);
    }
  };
  if (poucentagePromotion < 0) {
    setPourcentagePromotion(0);
  }
  if (quantity < 0) {
    setQuantity(0);
  }
  if (price < 0) {
    setPrice(0);
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
        create new items
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
            <DialogTitle id="form-dialog-title">Create new Item</DialogTitle>
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
                <ItemImageEdit itemImages={[noProgram]} />
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
                    label="Item title"
                    type="text"
                    fullWidth
                    value={itemTitle}
                    onChange={(e) => setItemTitle(e.target.value)}
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
                      <MenuItem value={store.title} key={store.id}>
                        {store.title}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Type</InputLabel>
                  <Select
                    disabled={!Store}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Type}
                    onChange={handleChangeType}
                    label="Type"
                    required
                    error={alert}
                  >
                    {CurrentTypes.length > 0 ? (
                      CurrentTypes.map((type) => (
                        <MenuItem value={type.typeId} key={type.typeId}>
                          {type.title}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem value={false}>This store has no types</MenuItem>
                    )}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <TextField
                    variant="outlined"
                    type="number"
                    margin="dense"
                    id="name"
                    label="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                  />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <TextField
                    variant="outlined"
                    type="number"
                    margin="dense"
                    id="name"
                    label="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </FormControl>
                <FormControlLabel
                  className={classes.formControl}
                  control={
                    <Switch checked={checkedNew} onChange={toggleCheckedNew} />
                  }
                  label="New Item"
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
                  label="Restock Item"
                />
                <FormControlLabel
                  className={classes.formControl}
                  control={
                    <Switch
                      checked={checkedPromotion}
                      onChange={toggleCheckedPromotion}
                    />
                  }
                  label="Item in Promotion"
                />

                <FormControl className={classes.formControl}>
                  <TextField
                    disabled={!checkedPromotion}
                    type="number"
                    variant="outlined"
                    margin="dense"
                    id="name"
                    label="Pourcentage %"
                    value={poucentagePromotion}
                    onChange={(e) => setPourcentagePromotion(e.target.value)}
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
                create item
              </Button>
            </Grid>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

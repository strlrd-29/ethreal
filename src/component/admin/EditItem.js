import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

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
import EditIcon from "@material-ui/icons/Edit";
import ClearIcon from "@material-ui/icons/Clear";
import { useDispatch, useSelector } from "react-redux";
import { editItem } from "../../redux/actions/itemsActions";

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
}));

export default function EditItem(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { stores } = useSelector((state) => state);
  const { types } = useSelector((state) => state);

  const [open, setOpen] = React.useState(false);
  const [reference, setReference] = React.useState("");
  const [itemTitle, setItemTitle] = React.useState("");
  const [Store, setStore] = React.useState("");
  const [CurrentTypes, setTypes] = React.useState([]);
  const [type, setType] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [quantity, setQuantity] = React.useState(0);
  const [price, setPrice] = React.useState(0);

  const [checkedNew, setCheckedNew] = React.useState(false);
  const [checkedRestock, setCheckedRestock] = React.useState(false);
  const [checkedPromotion, setCheckedPromotion] = React.useState(false);
  const [poucentagePromotion, setPourcentagePromotion] = React.useState(0);
  const [alert, setAlert] = React.useState(false);
  useEffect(() => {
    setReference(props.itemData.ref);
    setItemTitle(props.itemData.title);
    setStore(props.itemData.store);
    setType(props.itemData.type);
    setDescription(props.itemData.description);
    setQuantity(props.itemData.quantity);
    setPrice(props.itemData.price);
    setCheckedNew(props.itemData.new);
    setCheckedPromotion(props.itemData.promotion);
    setPourcentagePromotion(props.itemData.pourcentagePromotion);
    setTypes(types?.filter((type) => type.store === props.itemData.store));
  }, [props.itemData, types]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeStore = (e) => {
    setStore(e.target.value);
    const currentTypes = types?.filter((type) => type.store === e.target.value);
    setTypes(currentTypes);
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
    if (type === false) {
      setAlert(true);
    } else {
      setOpen(false);
      setAlert(false);
      const editedItem = {
        type: type,
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
      dispatch(editItem(props.itemData.itemId, editedItem));
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

  return (
    <div>
      <Button
        startIcon={<EditIcon />}
        onClick={handleClickOpen}
        style={
          props.cellSelected
            ? {
                marginRight: 20,
                borderRadius: 0,
                backgroundColor: "#0096c7",
                color: "white",
              }
            : { display: "none" }
        }
      >
        edit
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
            <DialogTitle id="form-dialog-title">Edit Item Data</DialogTitle>
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
                <ItemImageEdit itemImages={props.itemData.itemImagesUrl} />
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
                    value={type}
                    onChange={handleChangeType}
                    label="Type"
                    required
                    error={alert}
                  >
                    {CurrentTypes?.map((type) => (
                      <MenuItem value={type.title} key={type.typeId}>
                        {type.title}
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
                    required
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
                save changes
              </Button>
            </Grid>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

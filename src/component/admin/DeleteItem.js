import React from "react";

import { useDispatch } from "react-redux";

//mui
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

//icons
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { deleteItem } from "../../redux/actions/itemsActions";

export default function DeleteItem(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    setOpen(false);
    dispatch(deleteItem(props.itemId));
  };
  return (
    <div>
      <Button
        startIcon={<DeleteForeverIcon />}
        onClick={handleClickOpen}
        style={
          props.cellSelected
            ? {
                marginRight: 20,
                borderRadius: 0,
                backgroundColor: "#e01e37",
                color: "white",
              }
            : { display: "none" }
        }
      >
        delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xs"
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title">Delete Item</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            if you delete the item tou cant bring it back later. Are you sur you
            want to delete this item ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            variant="contained"
            style={{
              borderRadius: 0,
              backgroundColor: "#e63946",
              color: "white",
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

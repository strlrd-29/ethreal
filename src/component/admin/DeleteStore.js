import React from "react";

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

import { useDispatch } from "react-redux";
import { deleteStore } from "../../redux/actions/storesActions";

export default function DeleteStore(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    dispatch(deleteStore(props.storeId));
    setOpen(false);
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
        <DialogTitle id="draggable-dialog-title">Delete Store</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            if you delete the store you cant bring it back latter. are you sur
            you want to delete this store ?
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

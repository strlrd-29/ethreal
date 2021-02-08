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
import SyncDisabledSharpIcon from '@material-ui/icons/SyncDisabledSharp';
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { deleteItem } from "../../redux/actions/itemsActions";

export default function BanneUser(props) {
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
    // banne user func
   // dispatch(deleteItem(props.itemId));
  };
  return (
    <div>
      <Button
        startIcon={<SyncDisabledSharpIcon />}
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
        Banne 
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xs"
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title">Banne User</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            if you banne the user you cant bring it back later. Are you sur you
            want to banne this user ?
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
            Banne
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

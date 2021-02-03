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
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

import { useSelector, useDispatch } from "react-redux";
import { acceptCommand } from "../../redux/actions/commandsActions";

export default function AccepteCommand(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAccept = () => {
    setOpen(false);
    dispatch(acceptCommand(props.commandId));
  };

  return (
    <div>
      <Button
        startIcon={<CheckCircleOutlineOutlinedIcon />}
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
        Accepte
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xs"
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title">
          Accepte the Command
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            i think you should call him first ! if you accepte the command it ll
            apear on his profile
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleAccept}
            variant="contained"
            color="secondary"
            style={{ borderRadius: 0 }}
          >
            Accepte
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

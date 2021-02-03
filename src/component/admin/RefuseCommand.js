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
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";

import { useDispatch } from "react-redux";
import { deleteCommand } from "../../redux/actions/commandsActions";
export default function RefuseCommand(props) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleRefuse = () => {
    setOpen(false);
    dispatch(deleteCommand(props.commandId));
  };

  return (
    <div>
      <Button
        startIcon={<CancelOutlinedIcon />}
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
        Refuse
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xs"
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title">
          Refuse the Command
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            if you refuse the command you cant bring it back are you sur you
            want to refuse the command ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleRefuse}
            variant="contained"
            color="secondary"
            style={{ borderRadius: 0 }}
          >
            Refuse
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

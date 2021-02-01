import React from "react";

//components
import ItemImageEdit from "./ItemImageEdit";
import ItemImageEditList from "./ItemImageEditList";
//mui
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
//icons
import EditIcon from "@material-ui/icons/Edit";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

export default function EditItem(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <DialogTitle id="form-dialog-title">Edit Item Data</DialogTitle>
        <DialogContent style={{ borderRadius: 0 }}>
          <Grid container xs={12}>
            <Grid container xs={6}>
              <ItemImageEdit itemImages={props.itemData.images} />
            </Grid>

            <Grid container xs={6}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            ignore
          </Button>
          <Button onClick={handleClose} color="primary">
            confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

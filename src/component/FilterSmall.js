import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function FilterSmall() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Fab
        aria-describedby={id}
        size="large"
        color="primary"
        aria-label="add"
        style={{
          position: "fixed",
          bottom: 20,
          left: 20,
          zIndex: 3,
        }}
        onClick={handleClick}
      >
        <LocationSearchingIcon />
      </Fab>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography className={classes.typography}>
          The content of the Filter.
        </Typography>
        <Button color="primary" onClick={handleClose} fullWidth>
          Filter
        </Button>
      </Popover>
    </div>
  );
}

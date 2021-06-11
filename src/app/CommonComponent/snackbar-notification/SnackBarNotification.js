import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

export default function SnackBarNotification(props) {
    const {
        state={state},
        handleCloseSnackBar={handleCloseSnackBar}
    } = props

    const { vertical, horizontal, open, message } = state;

  return (
    <div>
      <Snackbar
        anchorOrigin={{vertical, horizontal }}
        open={open}
        onClose={handleCloseSnackBar}
        message={message}
        key={vertical + horizontal}
        // autoHideDuration={2000}
      />
    </div>
  );
}

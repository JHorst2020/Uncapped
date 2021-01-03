import React, { useState } from "react";
import {useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import StarSlider from "./../StarSlider";
import { createSpirit } from "../../store/scotch";

export default function CreateNewScotch() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [open, setOpen] = useState(false);

  
 
  const [scotchName, setScotchName] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [spiritStyle, setSpiritStyle] = useState("");
  const [scotchUrl, setScotchUrl] = useState("");

//   console.log(scotch);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpen(false);

    const payload = {
      scotchName,
      country,
      region,
      spiritStyle,
      scotchUrl,
    };
    let newReview = await dispatch(createSpirit(payload));
    if (newReview) {
      history.push("/");
    }
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add New Scotch
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Scotch</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="Scotch Name"
            type="text"
            fullWidth
            variant="outlined"
            value={scotchName}
            onChange={(e) => setScotchName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="country"
            label="Country"
            type="text"
            variant="outlined"
            fullWidth
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <TextField
            margin="dense"
            id="region"
            label="Region"
            type="text"
            variant="outlined"
            fullWidth
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
          <TextField
            margin="dense"
            id="style"
            label="Scotch Style"
            type="text"
            variant="outlined"
            fullWidth
            value={spiritStyle}
            onChange={(e) => setSpiritStyle(e.target.value)}
          />
          <TextField
            margin="dense"
            id="url"
            label="Scotch Photo (URL)"
            type="text"
            variant="outlined"
            fullWidth
            value={scotchUrl}
            onChange={(e) => setScotchUrl(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

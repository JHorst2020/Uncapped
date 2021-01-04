import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux"
import { useHistory } from "react-router-dom"
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import StarSlider from "./../StarSlider"
import {createReview} from "../../store/userReview"
import Slider from '@material-ui/core/Slider';

export default function AddReview({scotch}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const user_id = useSelector(state => {
    return state.session.user.id
  })
  const drink_id = scotch.id
 

  const [open, setOpen] = useState(false);
  const [userRating, setUserRating] = useState("")
  // const [userStar, setUserStar] = useState("")
  const [userReview, setUserReview] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // console.log(userStar)
  console.log(location)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async(e)=> {
      e.preventDefault()
      setOpen(false)
    // let userRating = parseInt(userStar)
      const payload = {
        drink_id,
        user_id,
        userReview,
        userRating,
        location,
      }
      let newReview = await dispatch(createReview(payload))
      if(newReview){
        history.push(`/scotch/${drink_id}`)
      }
      
  }

 

  
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Review this scotch!
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{scotch.scotchName}</DialogTitle>
        <DialogContent>
          <TextField 
          margin="dense"
          id="starRating"
          label="How Many Stars?"
          value={userRating}
          onChange={(e) => setUserRating(e.target.value)}
          type="number"
          min="0"
          max="5"
          />
          <TextField
            margin="dense"
            id="name"
            label="What did you think?"
            multiline
            rowsMax={4}
            fullWidth
            cols="40"
            rows="5"
            variant="outlined"
            value={userReview}
            onChange={(e)=> setUserReview(e.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Add your location"
            type="text"
            variant="outlined"
            fullWidth
            value={location}
            onChange={(e)=> setLocation(e.target.value)}
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

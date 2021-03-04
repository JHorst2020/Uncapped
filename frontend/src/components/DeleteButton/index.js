import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

import { deleteReview } from "../../store/userReview";


export default function DeleteButton(post){
    const dispatch = useDispatch();
    const history = useHistory()
    const loggedInUser = useSelector((state) => {
      return state.session.user?.id;
    });
const {id} = post?.post


// console.log(post.post.id)
   const handleSubmit = async (e) => {
     e.preventDefault();

     const payload = {
       id,
     };
     let deletePost = await dispatch(deleteReview(payload));
     if (deletePost) {
       history.push("/");
     }
   };
   if(loggedInUser !== undefined && loggedInUser === post.post.user_id){
       return (
         <div>
           <Button variant="contained" color="secondary" onClick={handleSubmit} style={{"margin-bottom":"10px"}}>
             <i class="fas fa-trash-alt"></i>
           </Button>
         </div>
       );
   } else {
      return <></>
   }
}
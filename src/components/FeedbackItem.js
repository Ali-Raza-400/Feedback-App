import React, { useContext } from "react";
import Card from "../shared/Card";
import {AiFillCloseCircle} from 'react-icons/ai'
import {AiFillEdit} from 'react-icons/ai'
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const {deleteReview,handleEditFeedback}=useContext(FeedbackContext)
 
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=>deleteReview(item.id)} className='close'><AiFillCloseCircle color='purple' /></button>
      <button onClick={()=>handleEditFeedback(item)} className='edit'><AiFillEdit color='purple' /></button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;

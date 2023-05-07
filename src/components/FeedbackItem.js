import React, { useState } from "react";
import Card from "../shared/Card";
import {AiFillCloseCircle} from 'react-icons/ai'
const FeedbackItem = ({ item,deleteReview }) => {
    
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=>deleteReview(item.id)} className='close'><AiFillCloseCircle color='purple' /></button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;

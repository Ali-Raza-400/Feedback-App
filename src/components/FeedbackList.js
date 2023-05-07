import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback,deleteReview }) => {
  return (
    <div>
        
      {!feedback || feedback.length===0 ? "No feedback found": feedback.map((item) => (
        <FeedbackItem item={item} key={item.id} deleteReview={deleteReview}/>
      ))}
    </div>
  );
};

export default FeedbackList;

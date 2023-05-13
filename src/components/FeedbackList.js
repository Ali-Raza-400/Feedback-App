import React, { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ deleteReview }) => {
 const {feedback}= useContext(FeedbackContext)
  return (
    <div>
        
      {!feedback || feedback.length===0 ? "No feedback found": feedback.map((item) => (
        <FeedbackItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default FeedbackList;

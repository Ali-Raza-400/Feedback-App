import React, { useContext, useEffect, useState } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Button from "../shared/Button";
import Card from "../shared/Card";
import RatingSelect from "./RatingSelect";

const FeedbackForm = () => {
  const { handleAdd, editFeedback, updateFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [rating, setRating] = useState(10);

  useEffect(() => {
    if (editFeedback.edit === true) {
      setText(editFeedback.item.text);
      setIsDisabled(editFeedback.item.edit);
    }
  }, [editFeedback]);
  function handleChange(e) {
    if (text === "") {
      setIsDisabled(false);
    } else if (text.trim().length <= 10) {
      setIsDisabled(true);
      setMessage("text should be greater than 10");
    } else {
      setIsDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault(false);
    const newFeedback = {
      text,
      rating,
    };
    if (editFeedback.edit === true) {
      updateFeedback(editFeedback.item.id, newFeedback);
    } else {
      handleAdd(newFeedback);
    }
    setText("");
  }
  return (
    <Card>
      <form onSubmit={onSubmit}>
        <h2>how would you rate your service with us</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            value={text}
            onChange={handleChange}
            placeholder="Enter Something"
          />
          <Button type="submit" isDisabled={isDisabled}>
            select
          </Button>
        </div>
        <div>{message}</div>
      </form>
    </Card>
  );
};

export default FeedbackForm;

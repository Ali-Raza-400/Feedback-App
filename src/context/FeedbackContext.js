import React from "react";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";          
const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "Text 1 from context", rating: 10 },
    { id: 2, text: "Text 2 from context", rating: 8 },
    { id: 4, text: "Text 3 from context", rating: 6 },
  ]);
  const [editFeedback,setEditFeedback]=useState({
    item:{},
    edit:false
  })
  const deleteReview = (id) => {
    if (window.confirm("are you sure you want to delete "))
      setFeedback(feedback.filter((item) => item.id !== id));
  };
  const handleAdd = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const handleEditFeedback=(item)=>{
    setEditFeedback({
        item,
        edit:true
    })
  }
  const updateFeedback=(id,updateObj)=>{
   setFeedback( feedback.map(item=>( item.id===id ? {...item,...updateObj}:item)))

  }
  return (
    <FeedbackContext.Provider value={{ feedback, deleteReview,handleAdd,handleEditFeedback ,editFeedback,updateFeedback}}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

import React, { useState } from 'react'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import FeedbackData from './data'
import { v4 as uuidv4 } from 'uuid';
const App = () => {
const[feedback,setFeedback]=useState(FeedbackData)
const deleteReview=(id)=>{
  if(window.confirm("are you sure you want to delete "))
  setFeedback(feedback.filter(item=>item.id!==id))
}
const handleAdd=(newFeedback)=>{
  newFeedback.id=uuidv4()
  console.log("feedback",feedback)
setFeedback([newFeedback,...feedback])
}
  return (
    <>
    <Header/>
    <div className='container'>
    <FeedbackForm handleAdd={handleAdd}/>
      <FeedbackStats feedback={feedback}/>
    <FeedbackList feedback={feedback} deleteReview={deleteReview}/>
    </div>
    </>
  )
}

export default App
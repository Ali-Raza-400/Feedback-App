import React, { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import FeedbackData from './data'
const App = () => {
const[feedback,setFeedback]=useState(FeedbackData)
const deleteReview=(id)=>{
  if(window.confirm("are you sure you want to delete "))
  setFeedback(feedback.filter(item=>item.id!==id))
}

  return (
    <>
    <Header/>
    <div className='container'>
      <FeedbackStats feedback={feedback}/>
    <FeedbackList feedback={feedback} deleteReview={deleteReview}/>
    
    </div>
    </>
  )
}

export default App
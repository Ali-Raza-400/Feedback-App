import React, {  useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStats = () => {
const {feedback}=useContext(FeedbackContext)
   const average = feedback.reduce((acc,curr)=>{return (acc+curr.rating)},0)/feedback.length
 
  return (
    <div>
        <p>Reviews : {feedback.length}</p>
        <p>Average : {average}</p>
    </div>
  )
}

export default FeedbackStats
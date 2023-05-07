import React from 'react'

const FeedbackStats = ({feedback}) => {
   const average = feedback.reduce((acc,curr)=>{return (acc+curr.rating)},0)/feedback.length
 
  return (
    <div>
        <p>Reviews : {feedback.length}</p>
        <p>Average : {average}</p>
    </div>
  )
}

export default FeedbackStats
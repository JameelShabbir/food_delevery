import React from 'react'

const Question = ({ question }) => {
  return (
    <div>
      <h4 dangerouslySetInnerHTML={{ __html: question }}></h4>
    </div>
  )
}

export default Question
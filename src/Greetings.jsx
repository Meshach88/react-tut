import React from 'react'

const Greetings = ({name="Guest", message="Hello"}) => {
  return (
    <div>
        <h3>{message}, {name}</h3>
    </div>
  )
}

export default Greetings
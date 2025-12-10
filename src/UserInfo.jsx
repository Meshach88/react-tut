import React from 'react'

const UserInfo = ({ id, name, email, age, gender}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
    </div>
  )
}

export default UserInfo
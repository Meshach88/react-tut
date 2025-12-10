import React from 'react'
import UserInfo from './UserInfo'

const UserCard = ({id, ...rest}) => {
    // console.log(rest)
  return (
    <div>
        <h2>User {id} Details</h2>
        <div>
            <UserInfo {...rest}/>
        </div>
    </div>
  )
}

export default UserCard
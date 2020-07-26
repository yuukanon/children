import React, { useContext } from 'react';
import ProfileContext from '../Context/ProfileContext';

const User = () => {
  const { isUserOnline, handleClick } = useContext(ProfileContext);
  return(
    <>
      <div>{isUserOnline ? 'User is online' : 'User is offline'}</div>
      <button onClick={handleClick}>change status</button>
    </>
  )
}

export default User;
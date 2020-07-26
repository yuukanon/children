import React from 'react';
import './App.css';
import UserList from './Components/UserList';
import ProfileContextComponent from './Context/ProfileContext';

function App() {
  return (
    
      <ProfileContextComponent>
       <UserList />
      </ProfileContextComponent>
  
  );
}

export default App;

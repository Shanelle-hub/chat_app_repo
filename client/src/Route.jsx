import React from 'react'
import { useContext } from 'react';
import { UserContext } from './UserContext';
import RegisterAndLoginForm from './RegisterAndLoginForm'
import Chat from './Chat';

function Route() {
    const { username ,id } = useContext(UserContext);
    if(username){
       
        return <Chat/>
    }
  return (
      <RegisterAndLoginForm/>
  )
}

export default Route

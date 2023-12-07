"use client"

import { useState } from 'react';
import { readUsers } from '../components/UsersData';
//import Users from '../../users.json';

export default function page() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleSignIn = () => {
    //const users = readUsers();
    Users
  }

  return (
    <div className="w-screen h-[80vh] flex justify-center py-10">
      <h1 className="text-3xl font-bold">Sign in</h1>

    </div>
  )
}


/* 
  
  useEffect that checks if there is a login
    - case 1 Login
      the data should be saved on localstorage
    - case 2 No login
      no need for local storage
  
  Users will have wishlist





*/
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
    <div className="w-screen h-[70vh] flex flex-col items-center gap-8 py-10">
      <h1 className="text-3xl font-bold"> Login </h1>
      <input
        className="bg-transparent w-80 py-3 px-1 border-b-3 border-black rounded-sm active:placeholder:hidden focus:outline-none  focus:placeholder-transparent"
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="bg-transparent w-80 py-3 px-1 border-b-3 border-black rounded-sm active:placeholder:hidden focus:outline-none  focus:placeholder-transparent"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button 
        className="bg-black my-10 py-3 px-10 rounded-md border-[3px] border-black text-white text-md font-medium hover:bg-white hover:border-[3px] hover:border-black hover:text-black"
        onClick={handleSignIn}> Sign Up </button>
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
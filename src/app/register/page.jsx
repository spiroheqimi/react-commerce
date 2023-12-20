"use client"

import users from "../users.json"
import { useState } from "react"

export default function page() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const newUser = {
    "id" : 2,
    "email" : "spiroheqimi2000@gmail.com",
    "password" : "spiro123"
  }

  console.log(users)

  const handleSignUp = () => {
    
    // Will create an object with id = users.length + 1 , email and password 
    // and then push it into the JSON file
  }



  return (
    <div className="w-screen h-[70vh] flex flex-col items-center gap-8 py-10">
      <h1 className="text-3xl font-bold">Register</h1>
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
        onClick={handleSignUp}> Sign Up </button>
    </div>
  )
}

/* 
  Duplicated emails arent allowed
  Function to map all users, in case there is a duplication , throw error 



  Maybe use Prisma 




*/
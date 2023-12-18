"use client"

import users from "../users.json";
import { useState } from "react";

export default function UsersData() {

  const [usersData,setUsersData] = useState([])
  
  const readUsers = () => {
  
    const data = JSON.parse(users);
    setUsersData(data);
    console.log(usersData)
    /* 
      const jsonData = fs.readFileSync(users, 'utf8');
      const data = JSON.parse(jsonData);
    */
  
    /* const findDuplicate = users.find((users) => users.email === user.email )
    return findDuplicate */
  }
  
  /* const writeUsers = (user) => {
    const jsonContent = JSON.stringify(data, null, 2);
  } */
  
  





  return (
    <>
    
    </>
  )
}

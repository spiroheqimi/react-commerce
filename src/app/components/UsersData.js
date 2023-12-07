import users from "../users.json"

export function readUsers(user) {
  const findDuplicate = users.find((users) => users.email === user.email )
  return findDuplicate
}

export function writeUsers(user) {
  
}

/* 
  

*/
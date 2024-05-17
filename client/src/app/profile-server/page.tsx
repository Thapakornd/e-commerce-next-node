import { getSession } from "@auth0/nextjs-auth0";

import React from 'react'

export default async function ProfileServer(){
  
  const { user} = await getSession()
  
  return (
    user && (
        <div>
            <img src={user.picture} alt={user.name} />
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <Logout />
        </div>
    )
  )
}

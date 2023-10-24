import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './auth'
function RequireAuth({children}) {
    const auth = useAuth();
    if(!auth.user){
        return <Navigate to='/home'/>
    }
  return (
    <div>{children}</div>
  )
}

export default RequireAuth
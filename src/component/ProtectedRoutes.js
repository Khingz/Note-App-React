import React from 'react'
import {Navigate} from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
    let auth = false
    if (!auth) {
        return <Navigate to='/signin' />
    }
  return children
}

export default ProtectedRoutes
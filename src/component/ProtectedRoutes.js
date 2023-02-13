import React from 'react'
import { AuthContext } from '../context/AuthContext';
import {Navigate} from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
  const { user, isLoading } = AuthContext();
    if (!user) {
        // return <Navigate to='/signin' />
        return true
    }
  return children
}

export default ProtectedRoutes
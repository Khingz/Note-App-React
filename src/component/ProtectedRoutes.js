import React from 'react'
import { AuthContext } from '../context/AuthContext';
import {Navigate} from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
  const { user } = AuthContext();
    if (!user) {
        return <Navigate to='/signin' />
    }
  return children
}

export default ProtectedRoutes
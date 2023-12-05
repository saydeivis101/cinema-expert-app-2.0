import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'

export const AuthRoutes = () => {
  return (
    
    <Routes>
        <Route path="auth/login" element={<LoginPage/>} />
        <Route path="auth/*" element={<LoginPage/>} />
        <Route path="/*" element={<LoginPage/>} />
    </Routes>
  )
}

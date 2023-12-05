import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { CinemaRoutes } from '../cinema/routes/CinemaRoutes'
import { SearchProvider } from '../cinema/context/SearchProvider'
import { Navbar } from '../cinema/components/ui/Navbar'

export const AppRouter = () => {
  return (
    <SearchProvider>
      <Navbar/>
      <Routes>
        <Route path="/*" element={<CinemaRoutes/>}/>
        <Route path="auth/login" element={<AuthRoutes/>}/>
    </Routes>
    </SearchProvider>

  )
}

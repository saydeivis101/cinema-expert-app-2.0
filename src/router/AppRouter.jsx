import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { CinemaRoutes } from '../cinema/routes/CinemaRoutes'
import { SearchProvider } from '../cinema/context/SearchProvider'

export const AppRouter = () => {
  return (
    <SearchProvider>
      <Routes>
        <Route path="/*" element={<CinemaRoutes/>}/>
        <Route path="login" element={<AuthRoutes/>}/>
    </Routes>
    </SearchProvider>

  )
}

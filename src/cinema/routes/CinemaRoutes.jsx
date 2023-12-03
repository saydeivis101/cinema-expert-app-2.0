import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { MainPage } from '../pages'
import { CinemaItemPage } from '../pages'

export const CinemaRoutes = () => {
  return (
   <Routes>
    <Route path="/*" element={<MainPage/>}/>
    <Route path="cinema/:id" element={<CinemaItemPage/>}/>
   </Routes>

  )
}

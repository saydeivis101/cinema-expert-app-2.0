import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { MainPage } from '../pages'
import { CinemaItemPage } from '../pages'
import { FavoritesPage } from '../pages/FavoritesPage'

export const CinemaRoutes = () => {
  return (
   <Routes>
    <Route path="/*" element={<MainPage/>}/>
    <Route path="cinema/:title" element={<CinemaItemPage/>}/>
    <Route path='/favorites' element={<FavoritesPage/>} />
   </Routes>

  )
}

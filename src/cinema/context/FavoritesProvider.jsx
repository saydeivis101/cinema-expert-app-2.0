import React, { createContext, useReducer } from 'react'
import { favoritesReducer } from '../reducer/favoritesReducer'

export const FavoritesContext = createContext()

const initialState = JSON.parse(window.localStorage.getItem('favorites'))|| [];

export const FavoritesProvider = ({children}) => {

    const [state, dispatch] = useReducer(favoritesReducer, initialState);

    const addToFavorites = item=>dispatch({
        type: 'TOOGLE_FAVORITE',
        payload: item})

    const removeFromFavorites = item=>dispatch({
        type: 'REMOVE_FROM_FAVORITES',
        payload: item
    })
    
  return (
    <FavoritesContext.Provider value={{
        addToFavorites,
        removeFromFavorites,
        favorites: state,
    }}>
        {children}
    </FavoritesContext.Provider>
    )
}

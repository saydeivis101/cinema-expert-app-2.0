import React, { createContext, useState } from 'react'
import {Search} from '../mocks/with-results.json'

export const SearchContext = createContext();

export const SearchProvider = ({children}) => {

/*     const initialState = Search.map((item)=>({
        title: item.Title,
        year: item.Year,
        id: item.imdbID,
        category: item.Type,
        url: item.Poster
    }))  */
    
    const [search, setSearch] = useState({
        searchText: 'halo',
        loading: false,
        content: [],
        error: null,
        validationError: null,
        favoritesIndex: (0,10)
    })

    return (
    <SearchContext.Provider value={{
        ...search,
        searchText: search.searchText,
        loading: search.loading,
        content: search.content,
        error: search.error,
        validationError: search.validationError,
        favoritesIndex: search.favoritesIndex,
        setSearch
    }}>
        {children}
    </SearchContext.Provider>
    )
}

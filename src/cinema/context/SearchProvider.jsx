import React, { createContext, useState } from 'react'
import {Search} from '../mocks/with-results.json'

export const SearchContext = createContext();

export const SearchProvider = ({children}) => {

    const initialState = Search.map((item)=>({
        title: item.Title,
        year: item.Year,
        id: item.imdbID,
        category: item.Type,
        image: item.Poster
    })) 
    
    const [search, setSearch] = useState({
        searchText: '',
        loading: false,
        content: [initialState],
        error: null,
    })

    return (
    <SearchContext.Provider value={{
        searchText: search.searchText,
        loading: search.loading,
        content: search.content,
        error: search.error,
        setSearch
    }}>
        {children}
    </SearchContext.Provider>
    )
}

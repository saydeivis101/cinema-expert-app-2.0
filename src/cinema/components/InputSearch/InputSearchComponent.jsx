import React, { useContext, useEffect, useRef } from 'react'
import { SearchContext } from '../../context/SearchProvider'
import { getContent } from '../../services/getContent';
import './inputsearchstyles.css';
import { useSearch } from '../../hooks/useSearch';

export const InputSearchComponent = () => {

  const {search, searchText, setSearch} = useContext(SearchContext);

  const { onInputChange,
    isFirstInput,
    clearInput, validationError} = useSearch();

  return (
    <form>
      <div className="input-search">
      <input className={(validationError)? `input-search-text error` : `input-search-text`} type="text" name="searchText" id=""
      placeholder='Breaking Bad, Halo, Sil...'
      value={(!isFirstInput.current)? searchText : ''}
      onChange={(event)=>onInputChange(event)}
      autoFocus
       />
      {
        (!isFirstInput.current && searchText!= undefined && searchText!= null) ? <img className='x-circle-search-input' src='/assets/x-circle.svg' onClick={()=>clearInput()} alt="x-circle" /> : null
      } 
      <button>Search</button>
      </div>

      {
        validationError? <h3 style={{color:'red'}}>{validationError}</h3> : null
      }

    </form>
  )
}

import React, { useContext, useEffect, useRef } from 'react'
import { SearchContext } from '../../context/SearchProvider'
import { getContent } from '../../services/getContent';
import './inputsearchstyles.css';

export const InputSearchComponent = () => {

  const {search, searchText, validationError, setSearch} = useContext(SearchContext);

  const isFirstInput = useRef(true);

  const onInputChange = ({target})=>{
    isFirstInput.current = false;
    const {name, value} = target;
    console.log(name);
    const newValue = value.trim();
    setSearch((search)=>({...search, [name]:newValue}));
/*     fetchingContent(); */
  }

  const clearInput = ()=>{
    setSearch((search)=>({...search, searchText:''}));
    const input = document.querySelector('.input-search-text');
    input.focus();
  }

  const fetchingContent = async(searchText)=>{
    try {
      setSearch((prevState)=>({
        ...prevState, loading: true,
      }))
      const fetchContent = await getContent(searchText);
      setSearch((prevState)=>({
        ...prevState, content: fetchContent
      }))
    } catch (error) {
      setSearch((prevState)=>({
        ...prevState, error: error.errorMessage,
      }))
    }finally{
      setSearch((prevState)=>({
        ...prevState, loading: false,
      }))
    }
  }

  useEffect(()=>{
    if(searchText.trim() == '') {
      setSearch((prevState)=>({
        ...prevState, validationError:'The search cannot be empty'
      }))
      return
    }
    const newSearch = searchText.trim() 
    fetchingContent(newSearch);
  },[searchText, search]);

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

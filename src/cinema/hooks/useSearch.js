import { useContext, useEffect, useRef } from "react";
import { SearchContext } from "../context/SearchProvider";
import { getContent } from "../services/getContent";

export const useSearch = () => {

  const {search, searchText, validationError, setSearch} = useContext(SearchContext);

  const isFirstInput = useRef(true);

  const onInputChange = ({target})=>{
    isFirstInput.current = false;
    const {name, value} = target;
    const newValue = value.trim();
    setSearch((search)=>({...search, [name]:newValue}));
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

  return{ 
    onInputChange,
    isFirstInput,
    clearInput,
    validationError,
  }
}

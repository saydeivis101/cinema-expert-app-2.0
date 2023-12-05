import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchProvider';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';
import { Navigate } from 'react-router-dom';

export const CinemaItem = () => {

    const { title } = useParams();
    const {search, searchText, validationError, content} = useContext(SearchContext);
    const navigate = useNavigate();

    useSearch();

    const item = content.find((item)=>(
      item.title === title
    ))

    if(!item){
      return <Navigate to="/"/>
    }

    const onTurnBack = ()=>{
      navigate(-1)
    }

  return (
   <>
    {item? <ul className='cinema-grid'>
            <li key={item.id}>
              <picture>
                <img src={item.url} alt={item.title} />
              </picture>

              <h3>{item.title}</h3>

              <h4>{item.category}</h4>

              <h5>{item.year}</h5>

             <button onClick={onTurnBack}>Go Back...</button>

            </li>

        </ul> : <h3>There's not content with that Search :(</h3>}
   </>
  )
}

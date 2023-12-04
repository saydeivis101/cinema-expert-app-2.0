import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchProvider';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const CinemaItem = () => {

    const { title } = useParams();
    console.log(title);
    const {search, content} = useContext(SearchContext);
  
    const item = content?.filter((item) => {
        item.title == title;
    });  
    const hasContent = item.length >0;

  return (
   <>
    {hasContent? <ul className='cinema-grid'>
          {content.map((item)=>(
            <li key={item.id}>
              <picture>
                <img src={item.url} alt={item.title} />
              </picture>

              <h3>{item.title}</h3>

              <h4>{item.category}</h4>

              <h5>{item.year}</h5>

              <button> <img src="/assets/heartIcon2.svg" alt="heart-icon" />Favorite</button>

             <Link to={`cinema/${item.title}`}>
             <button>More...</button>
             </Link>
            </li>
          ))}
        </ul> : <h3>There's not content with that Search :(</h3>}
   </>
  )
}

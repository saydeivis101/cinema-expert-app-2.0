import React, { useContext } from 'react'
import { SearchContext } from '../../context/SearchProvider'

import './cinemagridstyles.css';

export const CinemaGridComponent = () => {

  const {search, content} = useContext(SearchContext);

  return (
    <div className="container">

        {content? <ul className='cinema-grid'>
          {content.map((item)=>(
            <li key={item.id}>
              <picture>
                <img src={item.url} alt={item.title} />
              </picture>

              <h3>{item.title}</h3>

              <h4>{item.category}</h4>

              <h5>{item.year}</h5>

              <button>Favorite</button>

              <button>More...</button>
            </li>
          ))}
        </ul> : <h3>There's not content with that Search :(</h3>}

    </div>
  )
}

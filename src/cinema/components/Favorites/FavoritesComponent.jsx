import React, { useContext, useId, useRef, useState } from 'react'
import { HeartIcon } from '../Icons/HeartIcon'
import './favoritesStyles.css';
import { FavoritesContext } from '../../context/FavoritesProvider';

export const FavoritesComponent = () => {

    const inputHeartIcon = useId()

    const {favorites, removeFromFavorites} = useContext(FavoritesContext);

    const nextItems = ()=>{
      
    }

    const hasFavorites = favorites.length>0;

  return (
    
    <div className="container favorites-container">

        <label className='heart-favorites' htmlFor={inputHeartIcon}>
            <HeartIcon />
        </label>

        <input className='input-heart-checkbox' type="checkbox" name="" id={inputHeartIcon} />

        <div className="display-favorites">


            {
              favorites? <ul className='favorites-grid'>
                <h2>Favorites</h2>
                
                {
                  !hasFavorites? <h3>There's not Favorites</h3> : null
                }
                <br />
                {favorites?.map((favorite)=>(
                  <li key={favorite.id}>
                    <h3>{favorite.title}</h3>
                    <picture>
                      <img src={favorite.url} alt={favorite.title} />
                    </picture>

                    <button onClick={()=>removeFromFavorites(favorite)}>-</button>
                  </li>
                ))}
              </ul>
              : <h3>There's not favorites yet</h3>
            }

        </div>

    </div>
    
  )
}

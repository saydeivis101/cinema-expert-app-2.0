import React, { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesProvider";
import { Link } from "react-router-dom";

export const CinemaGridItem = ({item}) => {

    const { favorites, addToFavorites } =
    useContext(FavoritesContext);

    const itemInFavorite = (item) => {
        if (favorites?.some((favorite) => favorite.id === item.id)){
          return true
        }else{
          return false
        };
      };

  return (
    <li key={item.id}>
      <picture>
        <img src={item.url} alt={item.title} />
      </picture>

      <h3>{item.title}</h3>

      <h4>{item.category}</h4>

      <h5>{item.year}</h5>

      <div className="buttons-item">
        <button
          className="button-favorite"
          onClick={() => addToFavorites(item)}
        >
          <img
            className={`heart-icon-favorite ${
              itemInFavorite(item) && `favorite`
            }`}
            src="/assets/heartIcon2.svg"
            alt="heart-icon"
          />
        </button>

        <Link to={`cinema/${item.title}`}>
          <button>
            <img
              className="more-icon"
              src="/assets/moreIcon.svg"
              alt="more-icon"
            />
          </button>
        </Link>
      </div>
    </li>
  );
};

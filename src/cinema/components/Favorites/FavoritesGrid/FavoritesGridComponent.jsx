import React, { useContext } from "react";

import { FavoritesContext } from "../../../context/FavoritesProvider";

import { FavoriteGridItem } from "./FavoriteGridItem";
import "./favoritegridstyles.css";

export const FavoritesGridComponent = ({ arrayName, customClass }) => {
  const { [arrayName]: content } = useContext(FavoritesContext);

  return (
    
    <div className={`container ${customClass ? `favorites-grid`:''}`}>

      {
        (content.length == 0) && <h4>There's no cinemas in Favorites</h4>
      }
      {content ? (
        <ul className={`cinema-grid`}>
          {content.map((item) => (
            <FavoriteGridItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <h3>{`There's no content in the ${arrayName} :(`}</h3>
      )}
    </div>
  );
};

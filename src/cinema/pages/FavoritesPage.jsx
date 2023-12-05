import React from "react";
import {FavoritesProvider} from "../context/FavoritesProvider";
import { Link } from "react-router-dom";
import { FavoritesGridComponent } from "../components/Favorites/FavoritesGrid/FavoritesGridComponent";

export const FavoritesPage = () => {
  return (
    <FavoritesProvider>
      <FavoritesGridComponent arrayName='favorites' customClass='favorites-grid'/>
      <Link className="favorites-to-home" to="/">
        Go to see more cinemas
      </Link>
    </FavoritesProvider>
  );
};

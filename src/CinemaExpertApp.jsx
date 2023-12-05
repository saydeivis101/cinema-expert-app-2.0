import React from "react";
import { CinemaGridComponent } from "./cinema/components/CinemaGrid/CinemaGridComponent";
import { InputSearchComponent } from "./cinema/components/InputSearch/InputSearchComponent";
import { FavoritesProvider } from "./cinema/context/FavoritesProvider";

import "./styles/app.css";
import { FavoritesAsideComponent } from "./cinema/components/Favorites/FavoritesAsideComponent";


export const CinemaExpertApp = () => {
  return (
      <FavoritesProvider>
        <div className="container">
        <header className="hero">
          <h1>Cinema Expert App</h1>
          <InputSearchComponent />
        </header>

        <aside>
          <FavoritesAsideComponent/>
        </aside>

        <main>
          <CinemaGridComponent arrayName="content" contextName={'searchContent'}/>
        </main>

      </div>
      </FavoritesProvider>
  );
};

import React from "react";
import { CinemaGridComponent } from "./cinema/components/CinemaGrid/CinemaGridComponent";
import { InputSearchComponent } from "./cinema/components/InputSearch/InputSearchComponent";
import { SearchProvider } from "./cinema/context/SearchProvider";
import "./styles/app.css";
import { FavoritesComponent } from "./cinema/components/Favorites/FavoritesComponent";
import { FavoritesProvider } from "./cinema/context/FavoritesProvider";

export const CinemaExpertApp = () => {
  return (
      <FavoritesProvider>
        <div className="container">
        <header className="hero">
          <h1>Cinema Expert App</h1>
          <InputSearchComponent />
        </header>

        <aside>
          <FavoritesComponent/>
        </aside>

        <main>
          <CinemaGridComponent/>
        </main>

      </div>
      </FavoritesProvider>
  );
};

import React from "react";
import { CinemaGridComponent } from "./cinema/components/CinemaGrid/CinemaGridComponent";
import { InputSearchComponent } from "./cinema/components/InputSearch/InputSearchComponent";
import { SearchProvider } from "./cinema/context/SearchProvider";
import "./styles/app.css";

export const CinemaExpertApp = () => {
  return (
    <SearchProvider>
      <div className="container">
        <header className="hero">
          <h1>Cinema Expert App</h1>
          <InputSearchComponent />
        </header>

        <main>
          <CinemaGridComponent/>
        </main>

      </div>
    </SearchProvider>
  );
};

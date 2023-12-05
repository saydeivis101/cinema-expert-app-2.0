import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchProvider";

import "./cinemagridstyles.css";

import { CinemaGridItem } from "../CinemaGridItem/CinemaGridItem";

export const CinemaGridComponent = ({ arrayName, customClass }) => {
  const { [arrayName]: content } = useContext(SearchContext);

  return (
    <div className={`container ${customClass ? `favorites-grid`:''}`}>
      {content ? (
        <ul className={`cinema-grid`}>
          {content.map((item) => (
            <CinemaGridItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <h3>{`There's no content in the ${arrayName} array :(`}</h3>
      )}
    </div>
  );
};

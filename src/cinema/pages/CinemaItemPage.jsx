import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { SearchContext } from "../context/SearchProvider";
import { CinemaItem } from "../components/CinemaItem/CinemaItem";

export const CinemaItemPage = () => {
  return (
    <>
    <CinemaItem/>
    </>
  );
};

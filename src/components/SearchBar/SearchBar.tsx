import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SearchBar.css";
import { DefaultState } from "../../types/types";

export const SearchBar = () => {
  const [searchedValue, setSearchedValue] = useState("");

  const dispatch = useDispatch();

  const error = useSelector((state: DefaultState) => {
    return state.movieResponse.Error;
  });

  const onSubmitSearchBar = (event: any) => {
    event.preventDefault();

    dispatch({
      type: "FETCH_MOVIES",
      payload: { value: searchedValue, page: 1 },
    });
  };

  const onInputChange = (event: any) => {
    setSearchedValue(event.target.value);
  };

  return (
    <div>
      <h2>Aďuškové zadanie</h2>
      <form onSubmit={onSubmitSearchBar}>
        <input className="search-input" type="text" onChange={onInputChange} />
        <input
          className={!error ? "search-button-static" : "search-button-failed"}
          type="submit"
        />
      </form>
    </div>
  );
};

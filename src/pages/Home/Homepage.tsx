import React from "react";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import SearchResults from "../../components/SearchResults/SearchResults";
import { useSelector } from "react-redux";
import { DefaultState } from "../../types/types";

const Homepage = () => {
  const fetchSuccess = useSelector(
    (state: DefaultState) => state.moviesRequestSuccess
  );

  return (
    <div>
      <SearchBar />
      {fetchSuccess && <SearchResults />}
    </div>
  );
};

export default Homepage;

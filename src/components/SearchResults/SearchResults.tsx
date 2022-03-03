import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DefaultState, SingleMovie } from "../../types/types";
import Pagination from "react-js-pagination";
import "./SearchResults.css";
import { ActionTypes } from "../../state/action-types";

const SearchResults = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchResults: Array<SingleMovie> | undefined = useSelector(
    (state: DefaultState) => state.movieResponse.Search
  );

  const activePage: number = useSelector(
    (state: DefaultState) => state.activePage
  );

  const searchedValue: string = useSelector(
    (state: DefaultState) => state.searchedValue
  );

  const itemsCount: number = useSelector((state: DefaultState): number =>
    parseInt(state.movieResponse.totalResults)
  );
  const error = useSelector((state: DefaultState) => state.movieResponse.Error);

  const handleRowClick = (item: string) => {
    navigate(`/detail/${item}`);
  };

  const handlePageChange = (page: number) => {
    dispatch({
      type: "FETCH_MOVIES",
      payload: { value: searchedValue, page: page },
    });
    dispatch({ type: ActionTypes.SET_ACTIVE_PAGE, payload: page });
  };

  return (
    <div className="search-results">
      {error && <h3>{error} Try again...</h3>}
      <table>
        {searchResults?.map((item: SingleMovie) => (
          <tbody
            className="result-link"
            key={item.imdbID}
            onClick={() => handleRowClick(item.imdbID)}
          >
            <tr>
              <td rowSpan={2} className="poster-cell">
                <img
                  alt={item.Title}
                  src={item.Poster}
                  className="result-poster"
                />
              </td>
              <td className="result-title">{item.Title}</td>
            </tr>
            <tr className="table-bottom-border">
              <td className="result-year"> {item.Year}</td>
            </tr>
          </tbody>
        ))}
      </table>
      {!error && (
        <Pagination
          totalItemsCount={itemsCount}
          onChange={handlePageChange}
          activePage={activePage}
        />
      )}
    </div>
  );
};

export default SearchResults;

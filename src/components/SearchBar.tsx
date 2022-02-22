import React, { useState } from "react";
import { connect } from "react-redux";

export const SearchBar = (props: any) => {
  const [searchedValue, setSearchedValue] = useState("");

  const onSubmitSearchBar = (event: any) => {
    event.preventDefault();
    console.log("event.target.value :>> ", event.target.value);
  };

  const onInputChange = (event: any) => {
    console.log("event.target.value :>> ", event.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmitSearchBar}>
        <input type="text" onBlur={onInputChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

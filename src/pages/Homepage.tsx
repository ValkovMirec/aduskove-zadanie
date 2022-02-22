import React from "react";
import { connect } from "react-redux";
import { SearchBar } from "../components/SearchBar";

const Homepage = (props: any) => {
  return (
    <div>
      <SearchBar />
      This is homepage
    </div>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

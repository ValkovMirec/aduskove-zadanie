import React from "react";
import { connect } from "react-redux";

const MyFavorites = (props: any) => {
  return <div>This is my favorites page</div>;
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyFavorites);

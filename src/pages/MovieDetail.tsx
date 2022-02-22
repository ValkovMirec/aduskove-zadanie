import React from "react";
import { connect } from "react-redux";

const MovieDetail = (props: any) => {
  return <div>This Movie Detail page</div>;
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

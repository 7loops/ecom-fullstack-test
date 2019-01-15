import React from "react";
import { connect } from "react-redux";
import "../stylesheets/listingPage.scss";

const renderItems = products => {
  if (products) {
    return products.map(product => {
      console.log("product =>", product);
    });
  }
};

const HomePage = props => {
  return <main>{renderItems(props.products)}</main>;
};

const mapStateToProps = state => {
  return {
    products: state.productReducer
  };
};

export default connect(mapStateToProps)(HomePage);

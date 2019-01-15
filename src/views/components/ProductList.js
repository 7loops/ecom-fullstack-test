import React from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";

const renderItems = products => {
  if (products) {
    return products.map(renderItem);
  }
};

const renderItem = (product, i) => {
  return <ProductItem key={i} product={product} />;
};

export const ProductList = props => {
  return <div className="products-list">{renderItems(props.products)}</div>;
};

const mapStateToProps = state => {
  return {
    products: state.productReducer
  };
};

export default connect(mapStateToProps)(ProductList);

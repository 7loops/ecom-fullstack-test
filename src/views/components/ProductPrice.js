import React from "react";

const ProductPrice = props => {
  return (
    <p className="product-priceContainer">
      <span className="product-priceLabel">{props.product.priceLabel} </span>
      <span className="product-price">
        {props.product.currency}
        {props.product.price}
      </span>
    </p>
  );
};

export default ProductPrice;

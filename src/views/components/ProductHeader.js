import React from "react";

const ProductHeader = props => {
  return (
    <header className="product-header">
      {props.product.productLabel.length > 0 && (
        <span className="product-label">{props.product.productLabel}</span>
      )}
      <a href={props.product.ctaLink}>
        <picture className="product-image">
          <img alt={props.product.image.alt} src={props.product.image.path} />
        </picture>
      </a>
    </header>
  );
};

export default ProductHeader;

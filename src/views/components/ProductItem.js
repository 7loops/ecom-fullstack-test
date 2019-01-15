import React from "react";
import ProductHeader from "./ProductHeader";
import ProductPrice from "./ProductPrice";
import ProductCta from "./ProductCta";

const ProductItem = props => {
  return (
    <div className="product">
      <article className="product-item">
        <ProductHeader product={props.product} />
        <div className="product-body">
          <h2 className="product-title">
            <a href={props.product.ctaLink}>{props.product.title}</a>
          </h2>
          <p className="product-description">{props.product.description}</p>
          <div>
            <ProductPrice product={props.product} />
            <ProductCta product={props.product} />
          </div>
        </div>
        <div />
      </article>
    </div>
  );
};

export default ProductItem;

import React from "react";

const ProductCta = props => {
  return (
    <a href={props.product.ctaLink} className="product-cta">
      {props.product.cta}
    </a>
  );
};

export default ProductCta;

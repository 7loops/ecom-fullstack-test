import React from "react";
import { shallow } from "enzyme";

import ProductCta from "./ProductCta";

describe("<ProductCta />", () => {
  const product = {
    ctaLink: "/",
    cta: "Shop Now"
  };
  it("Renders without crashing", () => {
    shallow(<ProductCta product={product} />);
  });
});

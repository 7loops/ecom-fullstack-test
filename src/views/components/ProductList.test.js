import React from "react";
import { mount } from "enzyme";
import ProductItem from "./ProductItem";
import { ProductList } from "./ProductList";

import storeProducts from "../../constants/products";

describe("<ProductList />", () => {
  it("Product list should be empty", () => {
    const container = mount(<ProductList products={storeProducts} />);
    expect(container.find(ProductItem).length).toBe(2);
  });

  it("Product list should be equal to 2", () => {
    const container = mount(<ProductList products={storeProducts} />);
    expect(container.find(ProductItem).length).toBe(2);
  });

  it("Product list should match snapshot", () => {
    const container = mount(<ProductList products={storeProducts} />);
    expect(container).toMatchSnapshot();
  });
});

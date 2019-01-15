import axios from "axios";
import { PRODUCTS_URL } from "../constants/parameters";

import { FETCH_SUCCESS } from "../constants/ActionTypes";

export const getProductsSuccess = products => ({
  type: FETCH_SUCCESS,
  products
});

export const fetchProducts = () => dispatch =>
  axios
    .get(PRODUCTS_URL)
    .then(res => res.data)
    .then(data => dispatch(getProductsSuccess(data)))
    .catch(err => {
      console.error(`Fetch products ${err}`);
    });

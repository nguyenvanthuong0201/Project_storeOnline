import {
  CART_LIST_ADD,
  CART_LIST_DELETE,
  CART_LIST_UPDATE,
} from "../constant/cartConstants";

const listCarts = (product, quantity) => async (dispatch) => {
  dispatch({ type: CART_LIST_ADD, product, quantity });
};
const deleteCarts = (keyProduct) => async (dispatch) => {
  dispatch({ type: CART_LIST_DELETE, keyProduct });
};
const updateCarts = (key, quantity) => async (dispatch) => {
  dispatch({ type: CART_LIST_UPDATE, key, quantity });
};
export { listCarts, deleteCarts, updateCarts };

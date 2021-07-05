/*
 *
 * HomeContainer reducer
 *
 */
import produce from "immer";
import {
  GET_PRESTATIONS_DATA_SUCCESS,
  ADD_PRESTATIONS_CART,
  DELETE_PRESTATIONS_CART,
} from "./constants";
import { filter, findIndex } from "lodash";

export const initialState = {
  prestations: [],
  cart: [],
};

const homeContainerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_PRESTATIONS_DATA_SUCCESS:
        draft.prestations = action.data;
        break;
      case ADD_PRESTATIONS_CART:
        draft.cart = [...draft.cart, action.data];
        break;
      case DELETE_PRESTATIONS_CART:
        draft.cart = draft.cart.filter(
          (element) => element.reference !== action.data
        );
        break;
    }
  });

export default homeContainerReducer;

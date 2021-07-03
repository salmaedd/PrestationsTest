/*
 *
 * HomeContainer reducer
 *
 */
import produce from "immer";
import { GET_PRESTATIONS_DATA_SUCCESS } from "./constants";

export const initialState = {
  prestations: [],
};

/* eslint-disable default-case, no-param-reassign */
const homeContainerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_PRESTATIONS_DATA_SUCCESS:
        draft.prestations = action.data;
        break;
    }
  });

export default homeContainerReducer;

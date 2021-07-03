/*
 *
 * HomeContainer actions
 *
 */

import {
  GET_PRESTATIONS_DATA,
  GET_PRESTATIONS_DATA_SUCCESS,
} from "./constants";

export function getPrestationsData() {
  return {
    type: GET_PRESTATIONS_DATA,
  };
}

export function getPrestationsDataSuccess(data) {
  return {
    type: GET_PRESTATIONS_DATA_SUCCESS,
    data,
  };
}

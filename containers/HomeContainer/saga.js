import Axios from "axios";
import { all, put, call, takeLatest } from "redux-saga/effects";

import { getPrestationsDataSuccess } from "./actions";
import { GET_PRESTATIONS_DATA } from "./constants";

export default function* rootSaga() {
  yield all([takeLatest(GET_PRESTATIONS_DATA, getPrestations)]);
}

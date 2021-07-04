import Axios from "axios";
import { all, put, call, takeLatest } from "redux-saga/effects";

import { getPrestationsDataSuccess } from "./actions";
import { GET_PRESTATIONS_DATA } from "./constants";
import URL from "../../configs/Paths";

function prestationsApi() {
  return Axios.request({
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    url: URL + "/api/techtest/universe",
  });
}

export function* getPrestations() {
  try {
    const { data } = yield call(prestationsApi);
    yield put(getPrestationsDataSuccess(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield all([takeLatest(GET_PRESTATIONS_DATA, getPrestations)]);
}

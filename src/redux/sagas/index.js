import { all } from "redux-saga/effects";

function* rootSaga() {
  yield all([watchGetComments]);
}

export default rootSaga;

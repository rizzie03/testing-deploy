import { all } from "redux-saga/effects";
import { watchLogin, watchRegister } from "./authSaga";


function* rootSaga() {
  yield all([watchLogin(), watchRegister()]);
}

export default rootSaga;

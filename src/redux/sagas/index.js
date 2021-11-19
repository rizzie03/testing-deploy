import { all } from "redux-saga/effects";
import { watchLogin, watchRegister } from "./authSaga";


function* rootSaga() {
  yield all(["semua watchers", watchLogin(), watchRegister()]);
}

export default rootSaga;

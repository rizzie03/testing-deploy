import { all } from "redux-saga/effects";
import { watchLogin, watchRegister } from "./authSaga";
import { getEventsFetchWatcher, getEventsCatFetchWatcher } from "./eventsSaga";

function* rootSaga() {
  yield all([
    "semua watchers",
    watchLogin(),
    watchRegister(),
    getEventsFetchWatcher(),
    getEventsCatFetchWatcher(),
  ]);
}

export default rootSaga;

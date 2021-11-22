import { all } from "redux-saga/effects";
import { watchLogin, watchRegister } from "./authSaga";
import { getEventsFetchWatcher, getEventsCatFetchWatcher } from "./eventsSaga";
import { watchComments, watchDetails, watchPostComments, watchPostDetails} from "./commentsSaga"

function* rootSaga() {
  yield all([
    "semua watchers",
    watchLogin(),
    watchRegister(),
    getEventsFetchWatcher(),
    getEventsCatFetchWatcher(),
    watchComments(),
    watchDetails(),
    watchPostComments(),
    watchPostDetails(),
  ]);
}

export default rootSaga;

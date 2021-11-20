import { all } from "redux-saga/effects";
import { watchLogin, watchRegister } from "./authSaga";


function* rootSaga() {
<<<<<<< HEAD
  yield all([watchGetComments]);
=======
  yield all(["semua watchers", watchLogin(), watchRegister()]);
>>>>>>> 7cd427beda0d7e03c8e54b69cae4b8b213615870
}

export default rootSaga;

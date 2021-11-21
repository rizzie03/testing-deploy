import { put, takeEvery } from "@redux-saga/core/effects";
import {
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../action/actionsTypes/authTypes";
import {
  REGISTER_BEGIN,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../action/actionsTypes/authTypes";
import axios from "axios";

const baseUrl = "https://api-see-event-teamb.herokuapp.com/";

function* login(action) {
  const { body } = action;

  try {
    const res = yield axios.post(`${baseUrl}login`, body);
    console.log(res);
    yield put(
      {
        type: LOGIN_SUCCESS,
      },
      localStorage.setItem("token", res.data.token), // setup token on local storage
      (window.location.href = "/")
    );
  } catch (err) {
    console.log(err);
    yield put({
      type: LOGIN_FAIL,
      error: err,
    });
  }
}
export function* watchLogin() {
  yield takeEvery(LOGIN_BEGIN, login);
}

function* register(action) {
  const { body } = action;
  try {
    const res = yield axios.post(`${baseUrl}user/register`, body);
    console.log(res);
    yield put(
      {
        type: REGISTER_SUCCESS,
      }
      // localStorage.setItem("token", res.data.token) // setup token on local storage
    );
  } catch (err) {
    console.log(err);
    yield put({
      type: REGISTER_FAIL,
      error: err,
    });
  }
}
export function* watchRegister() {
  yield takeEvery(REGISTER_BEGIN, register);
}

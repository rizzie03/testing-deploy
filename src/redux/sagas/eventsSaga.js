// import { put, takeEvery } from "@redux-saga/core/effects";
// import { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_FAIL } from "../action/actionsTypes/authTypes";
// import { REGISTER_BEGIN, REGISTER_SUCCESS, REGISTER_FAIL } from "../action/actionsTypes/authTypes";
// import axios from "axios";



// const baseUrl = "https://api-see-event-teamb.herokuapp.com/";

// function* login(action) {
//     const { body } = action;
    
//     try {
//         const res = yield axios.post(`${baseUrl}login`, body);
//         console.log(res);
//         yield put(
//           {
//             type: LOGIN_SUCCESS,
//           },
//           localStorage.setItem("token",res.data.token), // setup token on local storage
//           window.location.href = "/"
//         );
//       } catch (err) {
//         console.log(err);
//         yield put({
//           type: LOGIN_FAIL,
//           error: err,
//         });
//       }
// }
// export function* watchLogin() {
//   yield takeEvery(LOGIN_BEGIN, login);
// }

// function* register(action) {
//   const { body } = action;
//   try {
//       const res = yield axios.post(`${baseUrl}user/register`, body);
//       console.log(res);
//       yield put(
//         {
//           type: REGISTER_SUCCESS,
//         },
//         // localStorage.setItem("token", res.data.token) // setup token on local storage
//       );
//     } catch (err) {
//       console.log(err);
//       yield put({
//         type: REGISTER_FAIL,
//         error: err,
//       });
//     }
// }
// export function* watchRegister() {
// yield takeEvery(REGISTER_BEGIN, register);
// }
import { takeEvery, call, put } from "redux-saga/effects";
import {
  GET_EVENTS_FETCH,
  GET_EVENTS_SUCCESS,
} from "../action/actionsTypes/eventsTypes";
import {
  GET_EVENTS_CAT_FETCH,
  GET_EVENTS_CAT_SUCCESS,
} from "../action/actionsTypes/categoriesTypes";
import http from "./http-common";

// Get all events
function* eventsFetch(slug) {
  return yield http.get(`/event${slug}`);
}

function* getEventsFetchWork({ payload: { slug } }) {
  const events = yield call(eventsFetch, slug);
  yield put({ type: GET_EVENTS_SUCCESS, events: events.data });
}

export function* getEventsFetchWatcher() {
  yield takeEvery(GET_EVENTS_FETCH, getEventsFetchWork);
}

// Get categories
function* eventsCatFetch() {
  return yield http.get(`/category`);
}

function* getEventsCatFetchWork() {
  const categories = yield call(eventsCatFetch);
  yield put({ type: GET_EVENTS_CAT_SUCCESS, categories: categories.data });
}

export function* getEventsCatFetchWatcher() {
  yield takeEvery(GET_EVENTS_CAT_FETCH, getEventsCatFetchWork);
}

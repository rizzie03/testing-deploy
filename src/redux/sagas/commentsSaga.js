import { put, takeEvery } from "@redux-saga/core/effects";
import {
  GET_COMMENTS_BEGIN,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
  POST_COMMENTS_BEGIN,
  POST_COMMENTS_SUCCESS,
  POST_COMMENTS_FAIL,
} from "../action/actionsTypes/typesComments";
import {
  GET_DETAILS_BEGIN,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAIL,
  POST_DETAILS_BEGIN,
  POST_DETAILS_SUCCESS,
  POST_DETAILS_FAIL,
} from "../action/actionsTypes/typesDetails";
import axios from "axios";

const baseUrl = "https://api-see-event-teamb.herokuapp.com/posts" 
    // Headers: bearer = {eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJudXNoYWlyIiwibGFzdE5hbWUiOiJmYWxhaCIsImVtYWlsIjoidGVzdEBtYWlsLmNvbSIsImF2YXRhciI6IjM2NTc3NTI5MjJjYWYzN2EzMmY5OGQ1Mjc1YmUzYWZkLnBuZyIsImlhdCI6MTYzNzE2NTMzOX0.40mqhlC6lVpj4cYaSYkxku4NlKXd7b5GkMAgNh-pj1U}
// };
// down below is function generator (function*)
function* getComments() {
  try {
    const res = yield axios.get(baseUrl);
    console.log(res);
    yield put({
      type: GET_COMMENTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_COMMENTS_FAIL,
      error: err,
    });
  }
}
function* postComments(actions) {
  const { body } = actions;
  try {
    const res = yield axios.post(`${baseUrl}`, body);
    console.log(res);
    yield put({
      type: POST_COMMENTS_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: POST_COMMENTS_FAIL,
      error: err,
    });
  }
}
function* getDetails(actions) {
  const { id } = actions;
  try {
    const res = yield axios.get(`${baseUrl}/${id}`);
    console.log(res);
    yield put({
      type: GET_DETAILS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_DETAILS_FAIL,
      error: err,
    });
  }
}

function* postDetails(actions) {
  const { body } = actions;
  try {
    const res = yield axios.post(`${baseUrl}`, body);
    console.log(res);
    yield put({
      type: POST_DETAILS_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: POST_DETAILS_FAIL,
      error: err,
    });
  }
}

export function* watchComments() {
  yield takeEvery(GET_COMMENTS_BEGIN, getComments);
}

export function* watchDetails() {
  yield takeEvery(GET_DETAILS_BEGIN, getDetails);
}

export function* watchPostComments() {
  yield takeEvery(POST_COMMENTS_BEGIN, postComments);
}
export function* watchPostDetails() {
  yield takeEvery(POST_DETAILS_BEGIN, postDetails);
}

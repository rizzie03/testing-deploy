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

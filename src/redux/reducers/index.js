import { combineReducers } from "redux";
import { authReducer } from "./authReducer"
import { eventReducer } from "./eventReducer"
import commentReducer from "./commentReducer"

const rootReducer = combineReducers({
  auth: authReducer, // ini untuk menampung user yang sedang login + simpan token (punya bang zain),
  events: eventReducer,// ini untuk menampungpunya destin dan channy(siap2 conflict wkwkwkw) (btw data2 events ini termasuk ke dalamnya ada comments juga ya tin)
  comment: commentReducer
});

export default rootReducer;

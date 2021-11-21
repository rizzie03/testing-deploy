import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import eventsReducer from "./eventsReducer";
import categoriesReducer from "./categoriesReducer";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  events: eventsReducer,
  categories: categoriesReducer,
  comment: commentReducer,
});

export default rootReducer;

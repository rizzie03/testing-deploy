import { GET_EVENTS_CAT_SUCCESS } from "../action/actionsTypes/categoriesTypes";

const initialState = {
  data: [],
};

const categoriesReducer = (state = initialState, action) => {
  const { type, categories } = action;
  switch (type) {
    case GET_EVENTS_CAT_SUCCESS:
      return { ...state, data: categories.data };
    default:
      return state;
  }
};

export default categoriesReducer;

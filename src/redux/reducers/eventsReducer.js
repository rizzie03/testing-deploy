import { GET_EVENTS_SUCCESS } from "../action/actionsTypes/eventsTypes";

const initialState = {
  totalData: "",
  data: [],
};

const eventsReducer = (state = initialState, action) => {
  const { type, events } = action;
  switch (type) {
    case GET_EVENTS_SUCCESS:
      return { ...state, data: events.data, totalData: events.totalData };
    default:
      return state;
  }
};

export default eventsReducer;

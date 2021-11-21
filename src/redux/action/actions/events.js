import { GET_EVENTS_FETCH } from "../actionsTypes/eventsTypes";

export const getEventsFetch = (slug) => ({
  type: GET_EVENTS_FETCH,
  payload: slug,
});

import { GET_COMMENTS_BEGIN, POST_COMMENTS_BEGIN } from "../actionsTypes/typesComments";
import { GET_DETAILS_BEGIN, POST_DETAILS_BEGIN } from "../actionsTypes/typesDetails";

export const getCommentsAction = (body) => {
  return {
    type: GET_COMMENTS_BEGIN,
    body
  };
};

export const postCommentsAction = (body) => {
  return {
    type: POST_COMMENTS_BEGIN,
    body
  };
};
export const getDetailsAction = (body) => {
  return {
    type: GET_DETAILS_BEGIN,
    body
  };
};
export const postDetailsAction = (body) => {
  return {
    type: POST_DETAILS_BEGIN,
    body
  };
};
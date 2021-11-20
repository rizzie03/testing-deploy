import {
  GET_COMMENTS_BEGIN,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
  POST_COMMENTS_BEGIN,
  POST_COMMENTS_SUCCESS,
  POST_COMMENTS_FAIL,
} from "../action/actionsTypes/typesComments";

const initialState = {
  avatar: [],
  username: "",
  dates: "",
  comment: "",
  error: null,
};

const commentReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_COMMENTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        comments: payload,
      };
    case GET_COMMENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        comments: "Error cannot comment",
      };
    case POST_COMMENTS_BEGIN:
      return {
        ...state,
        comments: {
          loading: true,
          error: null,
        },
      };
    case POST_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: {
          loading: false,
          error: null,
          details: payload,
        },
      };
    case POST_COMMENTS_FAIL:
      return {
        ...state,
        comments: {
          loading: false,
          error: error,
          details: "fail to comment",
        },
      };
  }
};

export default commentReducer;

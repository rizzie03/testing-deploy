import { COMMENT_BEGIN } from "../actionsTypes/typesComments";
import { DETAILS_BEGIN } from "../actionsTypes/typesDetails";

export const CommentAction = (body) => {
  return {
    type: COMMENT_BEGIN,
    body
  };
};

export const DetailsAction = (body) => {
  return {
    type: DETAILS_BEGIN,
    body
  };
};
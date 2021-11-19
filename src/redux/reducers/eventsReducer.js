import {
    GET_COMMENTS_BEGIN,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_FAIL,
  } from "../actions/types";
  import React from 'react'
  
  const initialState = {
    movies: [],
    loading: false,
    error: null,
    detailMovie: {
      loading: false,
      error: null,
      details: {},
    },
  };
  
  const comments = (state = initialState, action) => {
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
          movies: payload,
        };
      case GET_COMMENTS_FAIL:
        return {
          ...state,
          loading: false,
          error: error,
          movies: [],
        };
  export default movie;
  
  
  
  export default function eventsReducer() {
    return (
      <div>
        
      </div>
    )
  }
  
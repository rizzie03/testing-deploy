// import {
//     LOGIN_BEGIN,
//     LOGIN_SUCCESS,
//     LOGIN_FAIL,
//     REGISTER_BEGIN,
//     REGISTER_SUCCESS,
//     REGISTER_FAIL,
//   } from "../../redux/action/actionsTypes/authTypes";
  
//   const initialState = {
//     login: [],
//     loading: false,
//     error: null,
//     detailLogin: {
//       loading: false,
//       error: null,
//       details: {},
//     },
//   };
  
//   const login = (state = initialState, action) => {
//     const { type, payload, error } = action;
//     switch (type) {
//       default:
//         return {
//           ...state,
//         };
//       case LOGIN_BEGIN:
//         return {
//           ...state,
//           loading: true,
//           error: null,
//         };
//       case LOGIN_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           error: null,
//           login: payload,
//         };
//       case LOGIN_FAIL:
//         return {
//           ...state,
//           loading: false,
//           error: error,
//           login: [],
//         };
//       case REGISTER_BEGIN:
//         return {
//           ...state,
//           detailLogin: {
//             loading: true,
//             error: null,
//           },
//         };
//       case REGISTER_SUCCESS:
//         return {
//           ...state,
//           detailLogin: {
//             loading: false,
//             error: null,
//             details: payload,
//           },
//         };
//       case REGISTER_FAIL:
//         return {
//           ...state,
//           detailLogin: {
//             loading: false,
//             error: error,
//             details: [],
//           },
//         };
//     }
//   };
  
//   export default login;
  
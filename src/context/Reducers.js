/* eslint-disable no-unreachable */
import { NOTE_ERROR, NOTE_SUCCESS, NOTE_LOADING } from "./actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case NOTE_LOADING:
      return {
        ...state,
        notes: {
          ...state.notes,
          loading: true,
        },
      };
      break;
    case NOTE_ERROR:
      return {
        ...state,
        notes: {
          ...state.notes,
          loading: false,
          err: action.payload,
        },
      };
      break;
    case NOTE_SUCCESS:
      return {
        ...state,
        notes: {
          ...state.notes,
          loading: false,
          data: action.payload,
        },
      };
      break;
    default:
      break;
  }
};

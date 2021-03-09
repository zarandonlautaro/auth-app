import {
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from "./usersTypes";

const initialState = {
  pending: false,
  users: [],
  error: null,
};

export default function usersReduce(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        users: action.users,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getProducts = (state) => state.users;
export const getProductsPending = (state) => state.pending;
export const getProductsError = (state) => state.error;

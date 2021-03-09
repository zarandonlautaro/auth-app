import {
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from "./usersTypes";

function fetchUsersPending() {
  return {
    type: FETCH_USERS_PENDING,
  };
}

function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    users,
  };
}

function fetchUsersError(error) {
  return {
    type: FETCH_USERS_ERROR,
    error,
  };
}

export { fetchUsersError, fetchUsersPending, fetchUsersSuccess };

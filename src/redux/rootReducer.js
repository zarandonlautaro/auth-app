import { combineReducers } from "redux";

import usersReduce from "./users/usersReduce";

const rootReducer = combineReducers({
  users: usersReduce,
});

export default rootReducer;

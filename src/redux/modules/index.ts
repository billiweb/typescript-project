import { combineReducers } from "redux";
import todoSlice from "./todoSlice";

const rootReducer = combineReducers({
  todoSlice,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

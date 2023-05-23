import { combineReducers } from "redux";

import ArticleReducer from "./articles/Articles_reducer";

const rootReducer = combineReducers({
  ArticleReducer,
});

export default rootReducer;

import { all, fork } from "redux-saga/effects";

import ArticleSaga from "./articles/Articles_saga";

export default function* rootSaga() {
  yield all([fork(ArticleSaga)]);
}

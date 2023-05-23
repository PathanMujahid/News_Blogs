import { takeLatest, put, call } from "redux-saga/effects";

import { GET_ARTICLES, GET_ARTICLE_DETAILS } from "./Action_types";

import {
  getArticlesSuccess,
  getArticlesFail,
  getArticleDetailsSuccess,
  getArticleDetailsFail,
} from "./Articles_action";

import { getGeneralArticles } from "../../Helper/api_helper";

function* onGetArticles() {
  try {
    const response = yield call(getGeneralArticles);
    yield put(getArticlesSuccess(response.data));
  } catch (error) {
    console.log("error : ", error);
    yield put(getArticlesFail(error.response));
  }
}

// function* onGetArticleDetails({ payload: id }) {
//   try {
//     const response = yield call(getArticleDetails, id);
//     yield put(getArticleDetailsSuccess(response));
//   } catch (error) {
//     yield put(getArticleDetailsFail(error.response));
//   }
// }

function* ArticleSaga() {
  yield takeLatest(GET_ARTICLES, onGetArticles);
  // yield takeLatest(GET_ARTICLE_DETAILS, onGetArticleDetails);
}

export default ArticleSaga;

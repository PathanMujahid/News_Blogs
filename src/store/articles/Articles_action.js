import {
  GET_ARTICLES,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAIL,
  GET_ARTICLE_DETAILS,
  GET_ARTICLE_DETAILS_SUCCESS,
  GET_ARTICLE_DETAILS_FAIL,
} from "./Action_types";

export const getArticles = () => {
  return {
    type: GET_ARTICLES,
  };
};

export const getArticlesSuccess = (articles) => {
  return {
    type: GET_ARTICLES_SUCCESS,
    payload: articles,
  };
};

export const getArticlesFail = (error) => {
  return {
    type: GET_ARTICLES_FAIL,
    payload: error,
  };
};

export const getArticleDetails = (id) => {
  return {
    type: GET_ARTICLE_DETAILS,
    payload: id,
  };
};

export const getArticleDetailsSuccess = (articles) => {
  return {
    type: GET_ARTICLE_DETAILS_SUCCESS,
    payload: articles,
  };
};

export const getArticleDetailsFail = (error) => {
  return {
    type: GET_ARTICLE_DETAILS_FAIL,
    payload: error,
  };
};

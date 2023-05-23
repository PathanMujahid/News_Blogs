import {
  GET_ARTICLES,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAIL,
  GET_ARTICLE_DETAILS,
  GET_ARTICLE_DETAILS_SUCCESS,
  GET_ARTICLE_DETAILS_FAIL,
} from "./Action_types";

const initialState = {
  Articles: [],
  Article: {},
  loadingArticles: false,
  loadingArticleDetails: false,
  error: {
    message: "",
  },
};

const ArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      state = { ...state, loadingArticles: true };
      break;
    case GET_ARTICLES_SUCCESS:
      return { ...state, Articles: action.payload, loadingArticles: false };
    case GET_ARTICLES_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingArticles: false,
      };
      break;
    case GET_ARTICLE_DETAILS:
      state = { ...state, loadingArticleDetails: true };
      break;
    case GET_ARTICLE_DETAILS_SUCCESS:
      state = {
        ...state,
        post: action.payload[0],
        loadingArticleDetails: false,
      };
      break;
    case GET_ARTICLE_DETAILS_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingArticleDetails: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default ArticleReducer;

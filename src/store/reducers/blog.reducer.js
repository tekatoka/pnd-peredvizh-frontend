import {
 GET_BLOG_ARTICLES_REQUEST,
 GET_BLOG_ARTICLES_SUCCESS,
 GET_BLOG_ARTICLES_FAILURE,
 GET_BLOG_ARTICLES_BY_SLUG_REQUEST,
 GET_BLOG_ARTICLES_BY_SLUG_SUCCESS,
 GET_BLOG_ARTICLES_BY_SLUG_FAILURE
} from "../actions/blog.actions";

export default function register(
  state = {
    isLoading: false,
    blogArticlesList: null,
    selectedBlogArticle: null,
    errorMessage: ""
  },
  action
) {
  switch (action.type) {
    case GET_BLOG_ARTICLES_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case GET_BLOG_ARTICLES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        blogArticlesList: action.payload,
        errorMessage: "",
      });
    case GET_BLOG_ARTICLES_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.payload,
      });
    case GET_BLOG_ARTICLES_BY_SLUG_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case GET_BLOG_ARTICLES_BY_SLUG_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        selectedBlogArticle: action.payload ? action.payload : "not found",
        errorMessage: "",
      });
    case GET_BLOG_ARTICLES_BY_SLUG_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        errorMessage: action.payload,
        selectedBlogArticle: "not found"
      });
    default:
      return state;
  }
}

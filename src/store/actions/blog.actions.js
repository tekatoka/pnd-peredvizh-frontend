import blogService from "../services/blog.service";

export const GET_BLOG_ARTICLES_REQUEST = "GET_BLOG_ARTICLES_REQUEST";
export const GET_BLOG_ARTICLES_SUCCESS = "GET_BLOG_ARTICLES_SUCCESS";
export const GET_BLOG_ARTICLES_FAILURE = "GET_BLOG_ARTICLES_FAILURE";

export const GET_BLOG_ARTICLES_BY_SLUG_REQUEST = "GET_BLOG_ARTICLES_BY_SLUG_REQUEST";
export const GET_BLOG_ARTICLES_BY_SLUG_SUCCESS = "GET_BLOG_ARTICLES_BY_SLUG_SUCCESS";
export const GET_BLOG_ARTICLES_BY_SLUG_FAILURE = "GET_BLOG_ARTICLES_BY_SLUG_FAILURE";

export function getBlogArticles() {
  return function (dispatch) {
    dispatch(request());
    blogService.getBlogArticles().then(
      (res) => {
        dispatch(success(res.data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request() {
    return { type: GET_BLOG_ARTICLES_REQUEST };
  }
  function success(payload) {
    return { type: GET_BLOG_ARTICLES_SUCCESS, payload };
  }
  function failure(error) {
    return { type: GET_BLOG_ARTICLES_FAILURE, error };
  }
}

export function getBlogArticleBySlug(slug) {
  return function (dispatch) {
    dispatch(request());
    blogService.getBlogArticleBySlug(slug).then(
      (res) => {
        dispatch(success(res.data));
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request() {
    return { type: GET_BLOG_ARTICLES_BY_SLUG_REQUEST };
  }
  function success(payload) {
    return { type: GET_BLOG_ARTICLES_BY_SLUG_SUCCESS, payload };
  }
  function failure(error) {
    return { type: GET_BLOG_ARTICLES_BY_SLUG_FAILURE, error };
  }
}

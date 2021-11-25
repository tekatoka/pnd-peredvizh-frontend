import client from "../axios-config";

class blogService {
  async getBlogArticles() {
    return await client.get("/blog-articles/");
  }

  async getBlogArticleBySlug(slug) {
    return await client.get("/blog-articles/slugs/" + slug);
  }
}

export default new blogService();

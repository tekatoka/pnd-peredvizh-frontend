import client from "./../axios-config";

class subpagesService {
  async getSubpageBySlug(slug) {
    return await client.get("/pages/" + slug);
  }
}

export default new subpagesService();

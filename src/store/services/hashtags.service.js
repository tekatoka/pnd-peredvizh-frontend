import client from '../axios-config';

class hashtagsService {
  async getAllHashtags() {
    return await client.get('/tags/findAllTags');
  }

  async getEntitiesByHashtag(tag) {
    return await client.get('/tags/find/' + tag);
  }
}

export default new hashtagsService();

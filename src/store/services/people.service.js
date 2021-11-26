import client from '../axios-config';

class peopleService {
  async getPeopleList() {
    return await client.get('/people');
  }

  async getPersonBySlug(slug) {
    return await client.get('/people/slugs/' + slug);
  }
}

export default new peopleService();

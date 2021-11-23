import client from './../axios-config';

class eventsService {
  async getEventsList() {
    return await client.get('/events');
  }

  async getEventBySlug(slug) {
    return await client.get('/events/slugs/' + slug);
  }
}

export default new eventsService();

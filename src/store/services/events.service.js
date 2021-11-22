import client from './../axios-config';

class eventsService {
  async getEventsList() {
    return await client.get('/events');
  }

  async getEventBySlug(slug) {
    return await client.get('/events?slug=' + slug);
  }
}

export default new eventsService();

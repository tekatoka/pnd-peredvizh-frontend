import client from './../axios-config';

class eventsService {
  async getEventsList() {
    return await client.get('/events');
  }
}

export default new eventsService();

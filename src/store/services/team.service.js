import client from '../axios-config';

class teamService {
  async getTeamMembersList() {
    return await client.get('/team-members');
  }

  async getTeamMemberBySlug(slug) {
    return await client.get('/team-members/slugs/' + slug);
  }
}

export default new teamService();

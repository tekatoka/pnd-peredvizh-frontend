import client from "./../axios-config";

class citiesService {
  async getCities() {
    return await client.get("/cities");
  }

  async getEventsByCity(cityId) {
    return await client.get("/events/cities/" + cityId);
  }

  async getPeopleByCity(cityId) {
    return await client.get("/people/cities/" + cityId);
  }
}

export default new citiesService();

import client from "./../axios-config";

class citiesService {
  async getCities() {
    return await client.get("/cities");
  }
}

export default new citiesService();

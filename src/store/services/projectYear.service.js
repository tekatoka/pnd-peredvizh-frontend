import client from "./../axios-config";

class projectYearService {
  async getByYear(year) {
    return await client.get("/project-years/" + year);
  }
}

export default new projectYearService();

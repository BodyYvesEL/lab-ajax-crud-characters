

class APIHandler {
  constructor (baseUrl) {
    this.api = axios.create({
      baseURL: baseURL
    });
    this.BASE_URL = baseURL;
    //this.BASE_URL = "http://localhost:8050";
    //this.api = axios.create({
    //  baseURL: this.BASE_UR,
    //});
  }

  // Get all characters
  getFullList() {
    return this.api.get('/characters');
  }

  // Get a single character by id
  getOneRegister(id) {
    return this.api.get(`/characters/${id}`);
  }

  // Create a single character
  createOneRegister(character) {
    return this.api.post(`/characters`, character);
  }

  // Edit a single character by id
  updateOneRegister(id, updatedInfo) {
    return this.api.put(`/characters/${id}`, updatedInfo);
  }

  // Delete a single character by id
  deleteOneRegister(id) {
    return this.api.delete(`/characters/${id}`);
  }
}




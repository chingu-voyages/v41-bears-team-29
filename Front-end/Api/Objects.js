import axios from "axios";

export default class ObjectsEndpoints {
  constructor(token) {
    this.config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
      signal: null,
    };
  }

  async createObject(name, kidId, image) {
    this.config.headers["Content-Type"] = "multipart/form-data";
    const response = await axios.post(
      `http://192.168.0.215:4000/api/objects`,
      { name, kidId, image },
      this.config
    );
    return response.data.data;
  }

  async getObject(controller, objectId) {
    this.config.signal = controller.signal;
    const response = await axios.get(
      `http://192.168.0.215:4000/api/objects/${objectId}`,
      this.config
    );
    return response.data.data;
  }

  async getKidObjects(controller, kidId) {
    this.config.signal = controller.signal;
    const response = await axios.get(
      `http://192.168.0.215:4000/api/objects/kid/${kidId}`,
      this.config
    );
    return response.data.data;
  }

  async deleteObject(objectId) {
    const response = await axios.delete(
      `http://192.168.0.215:4000/api/objects/${objectId}`,
      this.config
    );
    return response.data;
  }
}

import axios from 'axios'

export default class KidsEndpoints {
  constructor() {
    this.config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
      signal: null
    }
  }

  async createKid(name, userId, image) {
    const response = await axios.post(
      'http://10.0.2.2:4000/api/kids',
      { name, userId, image },
      this.config
    )
    return response.data.data
  }

  async getUserKids(controller, userId){
    this.config.signal = controller.signal
    const response = await axios.post(
      `http://10.0.2.2:4000/api/kids/user/${userId}`,
      this.config
    )
    return response.data.data
  }

  async getKid(controller, kidId){
    this.config.signal = controller.signal
    const response = await axios.post(
      `http://10.0.2.2:4000/api/kids/user/${kidId}`,
      this.config
    )
    return response.data.data
  }

  async updateKid(kidId, name, image){
    const response = await axios.put(
      `http://10.0.2.2:4000/api/kids/user/${kidId}`,
      {name, image},
      this.config
    )
    return response.data.data
  }

  async deleteKid(kidId){
    const response = await axios.delete(
      `http://10.0.2.2:4000/api/kids/user/${kidId}`,
      this.config
    )
    return response.data
  }
}
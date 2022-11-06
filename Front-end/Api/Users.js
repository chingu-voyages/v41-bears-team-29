import axios from 'axios'

export default class UsersEndpoints {
  constructor() {
    this.config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
      signal: null
    }
  }

  async createUser(username, email, password) {
    const response = await axios.post(
      `http://localhost:4000/api/users`,
      { username, email, password },
      this.config
    )
    return response.data.data
  }

  async authUser(email, password) {
    const response = await axios.post(
      `http://localhost:4000/api/users/auth`,
      { email, password },
      this.config
    )
    return response.data.data
  }

  async getUser(controller) {
    this.config.signal = controller.signal
    const response = await axios.get(
      `http://localhost:4000/api/users/auth/session`,
      this.config
    )
    return response.data.data
  }

  async logoutUser(controller) {
    this.config.signal = controller.signal
    const response = await axios.get(
      `http://localhost:4000/api/users/auth/logout`,
      this.config
    )
    return response.data
  }
}
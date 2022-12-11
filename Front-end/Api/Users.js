import axios from "axios";

export default class UsersEndpoints {
  constructor() {
    this.config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      signal: null,
    };
  }
  /** Create new user
   * @param {string} username the new username
   * @param {string} email the new user email
   * @param {string} password the new user password
   * @return {Object} {id,username, email, image, password} for the new user
   */
  async createUser(username, email, password) {
    const response = await axios.post(
      `http://192.168.0.215:4000/api/users`,
      { username, email, password },
      this.config
    );
    return response.data.data;
  }

  /** Authenticate user
   * @param {string} email the new user email
   * @param {string} password the new user password
   * @return {Object} {id,username, email, image, password} for the authenticated user
   */
  async authUser(email, password) {
    const response = await axios.post(
      `http://192.168.0.215:4000/api/users/auth`,
      { email, password },
      this.config
    );
    return response.data.data;
  }
  /** Keep user logged in */
  async getUser(controller) {
    this.config.signal = controller.signal;
    const response = await axios.get(
      `http://192.168.0.215:4000/api/users/auth/session`,
      this.config
    );
    return response.data.data;
  }

  /** To logout user and delete his session */
  async logoutUser(controller) {
    this.config.signal = controller.signal;
    const response = await axios.get(
      `http://192.168.0.215:4000/api/users/auth/logout`,
      this.config
    );
    return response.data;
  }
}

import axios from 'axios';

export default class PoupaUpService {
  constructor() {
    this.baseUrl = 'http://localhost:7777';
  }

  async signIn(body) {
    try {
      const endpoint = '/login';
      const response = await axios.post(`${this.baseUrl}${endpoint}`, body);

      return {
        success: true,
        result: response.data,
      };
    } catch (err) {
      return {
        sucess: false,
        result: err.response.data
      };
    }
  }

  async signUp(body) {
    try {
      const endpoint = '/user';
      const response = await axios.post(`${this.baseUrl}${endpoint}`, body, { headers: {} });

      return {
        success: true,
        result: response.data
      };
    } catch (err) {
      return {
        success: false,
        result: err.response.data
      };
    }
  }
}

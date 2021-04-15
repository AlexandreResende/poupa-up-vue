import axios from 'axios';
import {
  POUPA_UP_BASE_URL,
  POUPA_UP_SIGN_UP_ENDPOINT,
  POUPA_UP_LOGIN_ENDPOINT
} from '../environment';

export default class UserService {
  constructor() {
    this.baseUrl = POUPA_UP_BASE_URL;
  }

  async signIn(body) {
    try {
      const endpoint = POUPA_UP_LOGIN_ENDPOINT;
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
      const endpoint = POUPA_UP_SIGN_UP_ENDPOINT;
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

import axios from 'axios';

export default class PoupaUpService {
  constructor() {
    this.baseUrl = '';
  }

  async signIn(username, password) {
    console.log('INSIDE SERVICE!');
    const signInEndpoint = '';
    const response = await axios.post(`${this.baseUrl}${signInEndpoint}`, { username, password });

    return response.data;
  }

  async signUp() {
    const signUpEndpoint = '';
    const response = await axios.post(`${this.baseUrl}${signUpEndpoint}`);

    return response.data;
  }
}

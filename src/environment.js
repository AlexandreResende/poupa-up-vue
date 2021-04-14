
const POUPA_UP_BASE_URL = process.env.POUPA_UP_BASE_URL || 'http://localhost:7777';
const POUPA_UP_SIGN_UP_ENDPOINT = process.env.POUPA_UP_SIGN_UP_ENDPOINT || '/signup';
const POUPA_UP_LOGIN_ENDPOINT = process.env.POUPA_UP_LOGIN_ENDPOINT || 'login';

module.exports = {
  POUPA_UP_BASE_URL,
  POUPA_UP_SIGN_UP_ENDPOINT,
  POUPA_UP_LOGIN_ENDPOINT,
};
const Joi = require('joi');

module.exports = class ValidatorService {
  static isEmailValid(email) {
    const schema = Joi.object({
      email: Joi.string().email({ tlds: { allow: false } }).required(),
    });

    const validationResult = schema.validate({ email });

    if (validationResult && validationResult.error) {
      return false;
    }

    return true;
  }

  static passwordMatches(password, passwordConfirmation) {
    if (password.length === 0) {
      return { isValid: false, errorMessage: 'Password can not be empty' };
    }
    if (password !== passwordConfirmation) {
      return { isValid: false, errorMessage: 'Password confirmation does not match password' };
    }

    return { isValid: true };
  }
}
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
}
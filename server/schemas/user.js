const Joi = require('@hapi/joi');

const loginDataSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(8).required().strict(),
});

module.exports = { loginDataSchema };
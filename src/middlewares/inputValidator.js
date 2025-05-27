// File: middlewares/inputValidator.js

import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(0).required(),
  profile: Joi.string().required(),
  phone: Joi.string()
    .pattern(/^[\d\s\-()+]+$/)
    .required(), // basic phone format validation
});

export default (req, res, next) => {
  const { error } = userSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: error.details.map((err) => err.message),
    });
  }
  next();
};

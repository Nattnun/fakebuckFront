import Joi from "joi";
import validate from "../../../utils/validate";

const registerSchema = Joi.object({
  firstName: Joi.string().required().trim().messages({
    "string.empty": "first name is required",
    "any.required": "first name is required",
  }),
  lastName: Joi.string().required().trim().messages({
    "string.empty": "first name is required",
    "any.required": "first name is required",
  }),
  emailOrMobile: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/),
  ])
    .required()
    .messages({
      "any.required": "email address or mobile number is required",
      "alternatives.match": "invalid email address or mobile number",
    }),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .required()
    .messages({
      "string.empty": "password is required",
      "any.required": "password is required",
      "string.pattern.base":
        "password must be at least 6 character and contain only alphabet and number",
    }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "string.empty": "confirm password is required",
    "any.required": "confirm password is required",
    "any.only": "password and confirm password did not match",
  }),
});

const validateRegister = (input) => validate(registerSchema)(input);
export default validateRegister;

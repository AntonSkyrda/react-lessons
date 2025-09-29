import * as Joi from "joi";

export const userValidator = Joi.object(
    {
        username: Joi.string().pattern(/w{4,}/).required().messages({
            "string.pattern.base": "name must have at least 4 character",
        }),
        password: Joi.string().min(4).max(6).required().messages({
            "string.min": "Password must be at least 4 chars",
            "string.max": "Password can not be greater than 6 chars",
        }),
        age: Joi.number().min(1).max(117).required().messages({
            "number.min": "Age must be greater than or equal 1",
            "number.max": "Age cant not be greater than 117",
        }),
    }
)
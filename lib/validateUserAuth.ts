import { Request } from "express"
import { body, validationResult } from "express-validator"

export const validateUserAuth = async (req: Request) => {
	await body("email").isEmail().withMessage("Invalid email").run(req)
	await body("password").notEmpty().withMessage("Password is required").run(req)

	return validationResult(req)
}

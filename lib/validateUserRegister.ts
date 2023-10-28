import { Request } from "express"
import { body, validationResult } from "express-validator"

export const validateUserRegister = async (req: Request) => {
	await body("firstName")
		.notEmpty()
		.withMessage("First name is required")
		.run(req)
	await body("lastName")
		.notEmpty()
		.withMessage("Last name is required")
		.run(req)
	await body("email").isEmail().withMessage("Invalid email").run(req)
	await body("password")
		.isLength({ min: 6 })
		.withMessage("Password must be at least 6 characters long")
		.run(req)

	return validationResult(req)
}

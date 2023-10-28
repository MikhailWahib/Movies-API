import { Request, Response } from "express"
import bcrypt from "bcrypt"
import User from "../models/User"
import { validationResult, body } from "express-validator"
import { generateToken } from "../lib/generateToken"
import { validateUserRegister } from "../lib/validateUserRegister"
import { hashPassword } from "../lib/hashPassword"
import { validateUserAuth } from "../lib/validateUserAuth"

export const registerUser = async (req: Request, res: Response) => {
	try {
		const errors = await validateUserRegister(req)
		if (!errors.isEmpty()) {
			return res
				.status(400)
				.json({ message: "Please provide all required fields" })
		}

		const { firstName, lastName, email, password } = req.body
		const existingUser = await User.findOne({ email })

		if (existingUser) {
			return res.status(409).json({ message: "Email already exists" })
		}

		const hashedPassword = await hashPassword(password)

		const newUser = new User({
			firstName,
			lastName,
			email,
			password: hashedPassword,
		})

		// Save the user to the database
		const savedUser = await newUser.save()

		return res.status(201).json({
			id: savedUser._id,
			firstName: savedUser.firstName,
			lastName: savedUser.lastName,
			email: savedUser.email,
			favorites: savedUser.favorites,
		})
	} catch (error) {
		console.log(error)
		return res.status(500).json({ message: "Server error" })
	}
}

export const authUser = async (req: Request, res: Response) => {
	try {
		const errors = await validateUserAuth(req)
		if (!errors.isEmpty()) {
			return res
				.status(400)
				.json({ message: "Please provide all required fields" })
		}

		const { email, password } = req.body

		const user = await User.findOne({ email })
		if (!user) {
			return res.status(404).json({ message: "User not found" })
		}
		const isMatch = await bcrypt.compare(password, user.password)
		if (!isMatch) {
			return res.status(401).json({ message: "Invalid password" })
		}
		generateToken(res, user.id)
		return res.status(200).json({
			id: user._id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			favorites: user.favorites,
		})
	} catch (error) {
		console.log(error)
		return res.status(500).json({ message: "Server error" })
	}
}

export const logout = (res: Response) => {
	res.clearCookie("jwt")
	res.status(200).json({ message: "User logged out" })
}

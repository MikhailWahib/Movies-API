import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import User from "../models/User"

interface JwtPayload {
	userId: string
	firstName: string
	lastName: string
	email: string
	token: string
}

interface RequestWithUser extends Request {
	user?: JwtPayload
}

export const protect = async (
	req: RequestWithUser,
	res: Response,
	next: NextFunction
) => {
	try {
		const token = req.headers.authorization?.split(" ")[1]
		if (!token) {
			return res
				.status(401)
				.json({ message: "Not Authorized, please include token" })
		}
		const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload

		if (!decoded) {
			return res.status(401).json({ message: "Invalid token. Access denied." })
		}

		req.user = decoded

		const user = await User.findOne({ _id: decoded.userId })

		if (!user) {
			return res.status(401).json({ message: "Invalid token. Access denied." })
		}
		next()
	} catch (e) {
		console.log(e)
	}
}

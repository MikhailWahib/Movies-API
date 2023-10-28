import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface JwtPayload {
	userId: string
}

declare global {
	namespace Express {
		interface Request {
			userId?: string
		}
	}
}

export const protect = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const token = req.cookies.jwt
		if (!token) {
			return res.status(401).json({ message: 'Not authenticated' })
		}
		const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload
		req.userId = decoded.userId
		next()
	} catch (e) {
		return res.status(403).json({ message: 'Invalid token. Access denied.' })
	}
}

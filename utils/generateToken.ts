import { Response, Request } from 'express'
import jwt from 'jsonwebtoken'

export const generateToken = (res: Response, userId: string) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET!, {
		expiresIn: '30d',
	})

	res.cookie('jwt', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
		sameSite: 'none',
		maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
	})
}

export default generateToken

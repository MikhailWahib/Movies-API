import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

import mongoose from 'mongoose'

import moviesRoute from './routes/moviesRoutes'
import userRoutes from './routes/userRoutes'

const app: Express = express()

app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('common'))

app.get('/', (req: Request, res: Response) => {
	res.send('Server is running')
})

app.use('/api/user', userRoutes)
app.use('/api/movies', moviesRoute)

const PORT = process.env.PORT || 9000

mongoose
	.connect(process.env.MONGO_URI!)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
		})
	})
	.catch((error) => {
		console.log(error)
	})

import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'

import mongoose from 'mongoose'

import moviesRoute from './routes/moviesRoutes'
import userRoutes from './routes/userRoutes'

const app: Express = express()

app.use(cors())
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
	res.send('Server is running')
})

app.use('/api/user', userRoutes)
app.use('/api/movies', moviesRoute)

const PORT = process.env.PORT || 3001

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

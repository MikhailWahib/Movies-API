import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"
import mongoose from "mongoose"
import moviesRoute from "./routes/moviesRoutes"

const app = express()

dotenv.config()
app.use(cors())
app.use(morgan("common"))

app.use("/api/v1/movies", moviesRoute)

const PORT = process.env.PORT || 9000

mongoose
	.connect(process.env.MONGO_URI!)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`⚡️[server]: Server is running at port ${PORT}`)
		})
	})
	.catch((error) => {
		console.log(error)
	})

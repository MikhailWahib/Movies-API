import { Request, Response } from 'express'
import Movie from '../models/Movie'

export const getAllMovies = async (req: Request, res: Response) => {
	try {
		const movies = await Movie.find()
		res.status(200).json(movies)
	} catch (error) {
		console.log(error)
	}
}

export const searchMoviesByName = async (req: Request, res: Response) => {
	try {
		const { name } = req.params
		const movies = await Movie.find({
			title: { $regex: new RegExp(name, 'i') },
		})

		if (movies.length === 0) {
			return res.status(404).json({ message: 'Movie not found' })
		}
		res.status(200).json(movies)
	} catch (error) {
		console.log(error)
	}
}

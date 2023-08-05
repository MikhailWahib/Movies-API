import mongoose, { Schema, Document, model } from 'mongoose'

interface Movie extends Document {
	title: string
	year: string
	rate: string
	duration: string
	desc: string
	genre: string[]
	actors: string[]
	director: string
	writers: string[]
	rateOutOf10: string
	thumbnail: string
	poster: string
	trailer: string
}

const MovieSchema: Schema = new Schema({
	title: String,
	year: String,
	rate: String,
	duration: String,
	desc: String,
	genre: [String],
	actors: [String],
	director: String,
	writers: [String],
	rateOutOf10: String,
	thumbnail: String,
	poster: String,
	trailer: String,
})

const Movie = model<Movie>('Movie', MovieSchema)
export default Movie

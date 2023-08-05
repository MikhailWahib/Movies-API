import mongoose, { Schema } from 'mongoose'

const MovieSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	year: {
		type: String,
		required: true,
	},
	rate: {
		type: String,
		required: true,
	},
	duration: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	genre: {
		type: [String],
		required: true,
	},
	actors: {
		type: [String],
		required: true,
	},
	director: {
		type: String,
		required: true,
	},
	writers: {
		type: [String],
		required: true,
	},
	rateOutOf10: {
		type: String,
		required: true,
	},
	thumbnail: {
		type: String,
		required: true,
	},
	poster: {
		type: String,
		required: true,
	},
	trailer: {
		type: String,
		required: true,
	},
})

const Movie = mongoose.model('Movie', MovieSchema)
export default Movie

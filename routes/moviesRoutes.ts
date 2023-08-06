import { Router } from 'express'
import {
	getAllMovies,
	searchMoviesByName,
	getRandomMovie,
} from '../controllers/moviesController'

const router = Router()

router.get('/', getAllMovies)
router.get('/search/:name', searchMoviesByName)
router.get('/random', getRandomMovie)

export default router

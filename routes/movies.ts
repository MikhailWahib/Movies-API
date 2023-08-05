import { Router } from 'express'
import {
	getAllMovies,
	searchMoviesByName,
} from '../controllers/moviesController'

const router = Router()

router.get('/', getAllMovies)
router.get('/:name', searchMoviesByName)

export default router

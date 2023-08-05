import { Request, Response } from 'express'
import { Router } from 'express'
import { registerUser, authUser } from '../controllers/userController'

const router = Router()

router.post('/', registerUser)
router.post('/auth', authUser)

export default router

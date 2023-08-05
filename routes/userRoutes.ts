import { Request, Response } from 'express'
import { Router } from 'express'
import { registerUser, authUser, logout } from '../controllers/userController'

const router = Router()

router.post('/', registerUser)
router.post('/auth', authUser)
router.post('/logout', logout)

export default router

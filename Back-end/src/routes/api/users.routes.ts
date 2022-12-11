import { Router } from 'express'
import { validateAuthToken } from '../../middlewares/AuthToken.middleware'
import {
  authenticateUser,
  createUser,
  getAllUsers,
  getUser,
  userSession,
  deleteUserSession
} from '../../controllers/users.controller'

const usersRoutes = Router()

usersRoutes.route('/users').get(validateAuthToken, getAllUsers).post(createUser)

usersRoutes.route('/users/:id').get(validateAuthToken, getUser)

usersRoutes.route('/users/auth').post(authenticateUser)

usersRoutes.route('/users/auth/session').get(userSession)

usersRoutes.route('/users/auth/logout').get(validateAuthToken, deleteUserSession)

export default usersRoutes

import { Router } from 'express'
import { validateAuthToken } from '../../middlewares/AuthToken.middleware'
import { authenticateUser, createUser, getAllUsers, getUser } from '../../controllers/users.controller'

const usersRoutes = Router()

usersRoutes.route('/users')
  .get(validateAuthToken, getAllUsers)
  .post(createUser)

usersRoutes.route('/users/:id')
  .get(validateAuthToken, getUser)

usersRoutes.route('/users/auth')
  .post(authenticateUser)

export default usersRoutes
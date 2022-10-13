import { Router, Request, Response } from 'express'
import usersRoutes from './api/users.routes'

const routes = Router()

routes.use('/api', usersRoutes)

routes.get('/api', (request: Request, response: Response): void => {
  response.send('Hello from api')
})

export default routes
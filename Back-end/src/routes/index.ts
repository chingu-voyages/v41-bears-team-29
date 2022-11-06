import { Router, Request, Response } from 'express'
import usersRoutes from './api/users.routes'
import kidsRoutes from './api/kids.routes'
import objectsRoutes from './api/objects.routes'

const routes = Router()

routes.use('/api', usersRoutes)
routes.use('/api', kidsRoutes)
routes.use('/api', objectsRoutes)

routes.get('/api', (request: Request, response: Response): void => {
  response.send('Hello from api')
})

export default routes
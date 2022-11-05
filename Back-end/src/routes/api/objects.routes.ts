import { Router } from 'express'
import {
  getAllObjects,
  getObject,
  getKidObjects,
  createObject,
  deleteObject
} from '../../controllers/objects.controller'
import { validateAuthToken } from '../../middlewares/AuthToken.middleware'

const objectsRoutes = Router()

objectsRoutes.route('/objects')
  .get(validateAuthToken, getAllObjects)
  .post(validateAuthToken, createObject)

objectsRoutes.route('/objects/:id')
  .get(validateAuthToken, getObject)
  .delete(validateAuthToken, deleteObject)

objectsRoutes.route('/objects/kid/:kid_id')
  .get(validateAuthToken, getKidObjects)

export default objectsRoutes
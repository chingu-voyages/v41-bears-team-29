import { Router } from 'express'
import {
  getAllKids,
  getKid,
  getKidByUser,
  createKid,
  updateKid,
  deleteKid
} from '../../controllers/kids.controller'
import { validateAuthToken } from '../../middlewares/AuthToken.middleware'

const kidsRoutes = Router()

kidsRoutes.route('/kids').get(validateAuthToken, getAllKids).post(validateAuthToken, createKid)

kidsRoutes
  .route('/kids/:id')
  .get(validateAuthToken, getKid)
  .put(validateAuthToken, updateKid)
  .delete(validateAuthToken, deleteKid)

kidsRoutes.route('/kids/user/:user_id').get(validateAuthToken, getKidByUser)

export default kidsRoutes

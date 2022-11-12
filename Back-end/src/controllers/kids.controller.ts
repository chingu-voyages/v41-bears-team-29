import { Request, Response, NextFunction } from 'express'
import { UsersModel } from '../models/users.model'
import { KidsModel } from '../models/kids.model'
import { ObjectsModel } from '../models/objects.model'
import formidable from 'formidable'
import config from '../config'

const usersModel = new UsersModel()
const kidsModel = new KidsModel()
const objectsModel = new ObjectsModel()

export const getAllKids = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const kids = await kidsModel.index()
    if (kids.length) {
      response.status(200).json({
        status: 'Success',
        data: [...kids],
        message: 'Kids got retrieved successfully'
      })
    } else {
      response.status(404).json({
        status: 'Failed',
        message: 'No kids got saved yet'
      })
    }
  } catch (error) {
    next(error)
  }
}

export const getKid = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = request.params.id
    const kid = await kidsModel.show(id)
    if (kid) {
      response.status(200).json({
        status: 'Success',
        data: { ...kid },
        message: 'Kid got retrieved successfully'
      })
    } else {
      response.status(404).json({
        status: 'Failed',
        message: 'No kid with that id'
      })
    }
  } catch (error) {
    next(error)
  }
}

export const getKidByUser = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = request.params.user_id
    const kids = await kidsModel.showByUser(userId)
    if (kids.length) {
      response.status(200).json({
        status: 'Success',
        data: [...kids],
        message: 'User kids got retrieved successfully'
      })
    } else {
      response.status(404).json({
        status: 'Failed',
        message: 'No kids for that user id yet'
      })
    }
  } catch (error) {
    next(error)
  }
}

export const createKid = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const kid = { name: '', image: '', userId: '' }
    const form = new formidable.IncomingForm()
    form.parse(request, async (err, fields, files) => {
      const userId = fields.userId
      const checkUser = await usersModel.show(userId as string)
      if (!checkUser) {
        response.status(409).json({
          status: 'Failed',
          message: 'There is no user for that user id'
        })
        return
      }
    })
    form
      .on('fileBegin', (name, file) => {
        const filePath = `${file.originalFilename}`
        kid.image = `${config.url}/${filePath}`
        file.filepath = `${__dirname}/../../uploads/${filePath}`
      })
      .on('field', (name, value) => {
        if (name === 'name') {
          kid.name = value
        } else if (name === 'userId') {
          kid.userId = value
        }
      })
      .on('end', async () => {
        const newKid = await kidsModel.create(kid.name, kid.image, kid.userId)
        response.status(201).json({
          status: 'Success',
          data: { ...newKid },
          message: 'New kid got created successfully'
        })
      })
  } catch (error) {
    next(error)
  }
}

export const updateKid = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const kid = { id: request.params.id, name: '', image: '' }
    const showKid = await kidsModel.show(kid.id)
    if (!showKid) {
      response.status(404).json({
        status: 'Failed',
        message: 'There is no kid with that id'
      })
      return
    }
    const form = new formidable.IncomingForm()
    form.parse(request, async (error, fields, files) => {
      if (files.hasOwnProperty('image')) {
        let file: formidable.File = files.image as unknown as formidable.File
        const filePath = `${file.originalFilename}`
        kid.image = `${config.url}/${filePath}`
        file.filepath = `${__dirname}/../../uploads/${filePath}`
      }
      if (fields.name) {
        kid.name = fields.name as string
      }
      const updatedKid = await kidsModel.update(kid.id, kid.name, kid.image)
      response.status(200).json({
        status: 'Success',
        data: { ...updatedKid },
        message: 'Kid got updated successfully'
      })
    })
  } catch (error) {
    next(error)
  }
}

export const deleteKid = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = request.params.id
    const checkKid = await kidsModel.show(id)
    if (!checkKid) {
      response.status(404).json({
        status: 'Failed',
        message: 'Kid is not exist'
      })
      return
    }
    const deletedObjects = await objectsModel.showByKid(id)
    const deletedKid = await kidsModel.delete(id)
    response.status(202).json({
      status: 'Success',
      message: 'Kid got deleted successfully'
    })
  } catch (error) {
    next(error)
  }
}

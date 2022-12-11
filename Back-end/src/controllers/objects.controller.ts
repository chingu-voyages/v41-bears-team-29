import { Request, Response, NextFunction } from 'express'
import { ObjectsModel } from '../models/objects.model'
import { KidsModel } from '../models/kids.model'
import formidable from 'formidable'
import config from '../config'

const kidsModel = new KidsModel()
const objectsModel = new ObjectsModel()

export const getAllObjects = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const objects = await objectsModel.index()
    if (objects.length) {
      response.status(200).json({
        status: 'Success',
        data: [...objects],
        message: 'All objects got retrieved successfully'
      })
    } else {
      response.status(404).json({
        status: 'Failed',
        message: 'There is no objects yet'
      })
    }
  } catch (error) {
    next(error)
  }
}

export const getObject = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = request.params.id
    const object = await objectsModel.show(id)
    if (object) {
      response.status(200).json({
        status: 'Success',
        data: { ...object },
        message: 'Object got retrieved successfully'
      })
    } else {
      response.status(404).json({
        status: 'Failed',
        message: 'There is no object with that id'
      })
    }
  } catch (error) {
    next(error)
  }
}

export const getKidObjects = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const kidId = request.params.kid_id
    const objects = await objectsModel.showByKid(kidId)
    if (objects.length) {
      response.status(200).json({
        status: 'Success',
        data: [...objects],
        message: 'Kid objects got retrieved successfully'
      })
    } else {
      response.status(404).json({
        status: 'Failed',
        message: 'There is no objects for that kid id'
      })
    }
  } catch (error) {
    next(error)
  }
}

export const createObject = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const object = { name: '', image: '', kidId: '' }
    const form = new formidable.IncomingForm()
    form.parse(request, async (error, fields, files) => {
      const kidId = fields.kidId as string
      const checkKid = await kidsModel.show(kidId)
      if (!checkKid) {
        response.status(409).json({
          status: 'Failed',
          message: 'There is no kid with that id'
        })
        return
      }
    })
    form
      .on('fileBegin', (name, file) => {
        const filePath = `${file.originalFilename}`
        object.image = `${config.url}/${filePath}`
        file.filepath = `${__dirname}/../../uploads/${filePath}`
      })
      .on('field', (name, value) => {
        if (name === 'name') {
          object.name = value
        } else if (name === 'kidId') {
          object.kidId = value
        }
      })
      .on('end', async () => {
        const newObject = await objectsModel.create(object.name, object.image, object.kidId)
        response.status(201).json({
          status: 'Success',
          data: { ...newObject },
          message: 'Object got created successfully'
        })
      })
  } catch (error) {
    next(error)
  }
}

export const deleteObject = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = request.params.id
    const checkObject = await objectsModel.show(id)
    if (!checkObject) {
      response.status(404).json({
        status: 'Failed',
        message: 'Object is not exist'
      })
      return
    }
    const deletedObject = await objectsModel.delete(id)
    response.status(202).json({
      status: 'Success',
      message: 'Object got created successfully'
    })
  } catch (error) {
    next(error)
  }
}

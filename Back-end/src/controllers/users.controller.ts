import { Request, Response, NextFunction } from 'express'
import { UsersModel } from '../models/users.model'
import { KidsModel } from '../models/kids.model'
import jwt from 'jsonwebtoken'
import config from '../config'

const usersModel = new UsersModel()
const kidsModel = new KidsModel()

export const getAllUsers = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const users = await usersModel.index()
    if (users.length) {
      response.status(200).json({
        status: 'Success',
        data: [...users],
        message: 'All users got retrieved successfully'
      })
    } else {
      response.status(404).json({
        status: 'Failed',
        message: 'No users yet'
      })
    }
  } catch (error) {
    next(error)
  }
}

export const getUser = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = request.params.id
    const user = await usersModel.show(id)
    if (user) {
      response.status(200).json({
        status: 'Success',
        data: { ...user },
        message: 'User got retrieved successfully'
      })
    } else {
      response.status(404).json({
        status: 'Failed',
        message: 'No user with that id'
      })
    }
  } catch (error) {
    next(error)
  }
}

export const createUser = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { username, email, password } = request.body
    const newUser = { username, email: email.toLowerCase(), image: `${config.url}/person.svg`, password }
    const checkEmail = await usersModel.showByEmail(email)
    if (checkEmail) {
      response.status(409).json({
        status: 'Failed',
        message: 'This email is already used'
      })
      return
    }
    const user = await usersModel.create(newUser)
    const token = jwt.sign({ user: user }, config.token as string)
    request.session.user = { ...user, token }
    response.status(201).json({
      status: 'Success',
      data: { user: { ...user, token } },
      message: 'User got created successfully'
    })
  } catch (error) {
    next(error)
  }
}

export const authenticateUser = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = request.body
    const checkEmail = await usersModel.showByEmail(email.toLowerCase())
    if (checkEmail) {
      const authenticatedUser = await usersModel.authenticate(email.toLowerCase(), password)
      if (!authenticatedUser) {
        response.status(401).json({
          status: 'Failed',
          message: 'Wrong email or password'
        })
        return
      } else {
        const token = jwt.sign({ user: authenticatedUser }, config.token as string)
        const kids = await kidsModel.showByUser(authenticatedUser.id as string)
        request.session.user = { ...authenticatedUser, token }
        response.status(200).json({
          status: 'Success',
          data: { user: { ...authenticatedUser, token }, kids: [...kids] },
          message: 'User got authenticated successfully'
        })
      }
    } else {
      response.status(404).json({
        status: 'Failed',
        message: 'This email is not used, Sign up instead'
      })
    }
  } catch (error) {
    next(error)
  }
}
import { Router, Request, Response, NextFunction } from 'express'
import { StatusError } from './Error.middleware'
import jwt from 'jsonwebtoken'
import config from '../config'

export const unauthorizedError = (next: NextFunction): void => {
  const error: StatusError = new Error('Login error please try again')
  error.status = 401
  next(error)
}

export const validateAuthToken = (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  try {
    const authorizationHeader = request.headers.authorization as string
    const token = authorizationHeader?.split(' ')[1]
    const decode = jwt.verify(token, config.token as unknown as string)
    if (decode) {
      next()
    } else {
      unauthorizedError(next)
    }
  } catch (error) {
    unauthorizedError(next)
  }
}
import { Request, Response, NextFunction } from 'express'

export const pageNotFoundMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
): void => {
  response.status(404).json({
    status: 'Failed',
    message: 'Page not found'
  })
}
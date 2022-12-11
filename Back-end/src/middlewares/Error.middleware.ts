import { Request, Response, NextFunction } from 'express'

export interface StatusError extends Error {
  status?: number
}

export const errorMiddleware = (
  error: StatusError,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const status = error.status || 500
  const message = error.message || 'Something went wrong '
  response.status(status).json({
    status: 'Failed',
    message
  })
}

import express, { Application, Request, Response } from 'express'
import { errorMiddleware } from './middlewares/Error.middleware'
import { pageNotFoundMiddleware } from './middlewares/PageNotFound.middleware'
import { sessionMiddleware } from './middlewares/Session.middleware'
import { IncomingMessage } from 'http'
import { SessionData } from 'express-session'
import morgan from 'morgan'
import config from './config'
import routes from './routes'
import helmet from 'helmet'
import cors from 'cors'

declare module 'express-session' {
  interface SessionData {
    user?: any
  }
}

interface SessionIncomingMessage extends IncomingMessage {
  session: SessionData
}

const PORT = config.port || 3000
// create an instance server
const app: Application = express()
// HTTP request logger middleware
app.use(morgan('short'))
// Secure headers to express app
app.use(helmet())
// Open cors for frontend
app.use(cors({
  origin: 'exp://192.168.8.142:19000',
  credentials: true
}))
app.use(express.static('uploads'))
// Save user credentials in cookie
app.use(sessionMiddleware)
// Parse any json data
app.use(express.json())
// use routes
app.use('/', routes)

// add routing for / path
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World 🌍'
  })
})

// Error middleware to send error status and message in json data
app.use(errorMiddleware)
// Send 404 if page not found
app.use(pageNotFoundMiddleware)

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at http://localhost:${PORT}`)
})

export default app
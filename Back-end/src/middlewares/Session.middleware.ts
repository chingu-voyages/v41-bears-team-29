import session from 'express-session'
import Redis from 'ioredis'
import connectRedis from 'connect-redis'
import config from '../config'

export const redisClient = new Redis()
const RedisStore = connectRedis(session)

export const sessionMiddleware = session({
  secret: config.cookieSecret as string,
  name: 'sid',
  resave: false,
  saveUninitialized: false,
  store: new RedisStore({ client: redisClient }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    secure: config.env === 'production' ? true : 'auto',
    httpOnly: true,
    sameSite: config.env === 'production' ? 'none' : 'lax'
  }
})
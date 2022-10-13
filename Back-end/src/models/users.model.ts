import database from '../database'
import { compareSync, hashSync } from 'bcrypt'
import config from '../config'

interface User {
  id?: string
  username: string
  email: string
  image: string
  password: string
}

export class UsersModel {
  async index(): Promise<User[]> {
    try {
      const connect = await database.connect()
      const sql = `SELECT *
                   FROM users`
      const results = await connect.query(sql)
      connect.release()
      return results.rows
    } catch (error) {
      throw new Error(`Unable to get all users, ${(error as Error).message}`)
    }
  }

  async show(id: string): Promise<User> {
    try {
      const connect = await database.connect()
      const sql = `SELECT id, username, email, image
                   FROM users
                   WHERE id = $1`
      const results = await connect.query(sql, [id])
      connect.release()
      return results.rows[0]
    } catch (error) {
      throw new Error(`Unable to show user by id, ${(error as Error).message}`)
    }
  }

  async showByEmail(email: string): Promise<User | null> {
    try {
      const connect = await database.connect()
      const sql = `SELECT
                   FROM users
                   WHERE email = $1`
      const results = await connect.query(sql, [email])
      connect.release()
      if (results.rows.length) {
        return results.rows[0]
      } else {
        return null
      }
    } catch (error) {
      throw new Error(`Unable to show user by email, ${(error as Error).message}`)
    }
  }

  async create(user: User): Promise<User> {
    try {
      const connect = await database.connect()
      const sql = `INSERT INTO users (username, email, image, password)
                   VALUES ($1, $2, $3, $4)
                   RETURNING id, username, email, image`
      const password = hashSync(user.password + config.pepper, config.salt)
      const result = await connect.query(sql, [user.username, user.email, user.image, password])
      connect.release()
      return result.rows[0]
    } catch (error) {
      throw new Error(`Unable to create new user, ${(error as Error).message}`)
    }
  }

  async deleteByEmail(email: string): Promise<User> {
    try {
      const connect = await database.connect()
      const sql = `DELETE
                   FROM users
                   WHERE email = $1
                   RETURNING id,username, email, image`
      const results = await connect.query(sql, [email])
      connect.release()
      return results.rows[0]
    } catch (error) {
      throw new Error(`Unable to delete user by email, ${(error as Error).message}`)
    }
  }

  async authenticate(email: string, userPassword: string): Promise<User | null> {
    try {
      const connect = await database.connect()
      const sql = `SELECT *
                   FROM users
                   WHERE email = $1`
      const results = await connect.query(sql, [email])
      connect.release()
      const { password } = results.rows[0]
      const isPasswordValid = compareSync(userPassword + config.pepper, password)
      if (isPasswordValid) {
        const { id, username, email, image } = results.rows[0]
        return { id, username, email, image } as User
      } else {
        return null
      }
    } catch (error) {
      throw new Error(`Unable to authenticate user, ${(error as Error).message}`)
    }
  }
}
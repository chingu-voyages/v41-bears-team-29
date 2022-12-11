import database from '../database'

type KidObject = {
  id?: string
  name: string
  image: string
  kid_id: string
}

export class ObjectsModel {
  async index(): Promise<KidObject[]> {
    try {
      const connect = await database.connect()
      const sql = `SELECT *
                   FROM objects`
      const results = await connect.query(sql)
      connect.release()
      return results.rows
    } catch (error) {
      throw new Error(`Unable to get all objects, ${(error as Error).message}`)
    }
  }

  async show(id: string): Promise<KidObject> {
    try {
      const connect = await database.connect()
      const sql = `SELECT *
                   FROM objects
                   WHERE id = $1`
      const results = await connect.query(sql, [id])
      connect.release()
      return results.rows[0]
    } catch (error) {
      throw new Error(`Unable to get object by id, ${(error as Error).message}`)
    }
  }

  async showByKid(kidId: string): Promise<KidObject[]> {
    try {
      const connect = await database.connect()
      const sql = `SELECT *
                   FROM objects
                   WHERE kid_id = $1`
      const results = await connect.query(sql, [kidId])
      connect.release()
      return results.rows
    } catch (error) {
      throw new Error(`Unable to get objects by kid id, ${(error as Error).message}`)
    }
  }

  async create(name: string, image: string, kid_id: string): Promise<KidObject> {
    try {
      const connect = await database.connect()
      const sql = `INSERT INTO objects (name, image, kid_id)
                   VALUES ($1, $2, $3)
                   RETURNING *`
      const results = await connect.query(sql, [name, image, kid_id])
      connect.release()
      return results.rows[0]
    } catch (error) {
      throw new Error(`Unable to create object, ${(error as Error).message}`)
    }
  }

  async delete(id: string): Promise<KidObject> {
    try {
      const connect = await database.connect()
      const sql = `DELETE
                   FROM objects
                   WHERE id = $1
                   RETURNING *`
      const results = await connect.query(sql, [id])
      connect.release()
      return results.rows[0]
    } catch (error) {
      throw new Error(`Unable to delete object by id, ${(error as Error).message}`)
    }
  }

  async deleteByKid(kidId: string): Promise<KidObject[]> {
    try {
      const connect = await database.connect()
      const sql = `DELETE
                   FROM objects
                   WHERE kid_id = $1`
      const results = await connect.query(sql, [kidId])
      connect.release()
      return results.rows
    } catch (error) {
      throw new Error(`Unable to delete objects by kid id, ${(error as Error).message}`)
    }
  }
}

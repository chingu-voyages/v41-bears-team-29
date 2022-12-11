import database from '../database'

type Kid = {
  id?: string
  name: string
  image: string
  user_id: string
}

export class KidsModel {
  async index(): Promise<Kid[]> {
    try {
      const connect = await database.connect()
      const sql = `SELECT *
                   FROM kids`
      const results = await connect.query(sql)
      connect.release()
      return results.rows
    } catch (error) {
      throw new Error(`Unable to get all kids, ${(error as Error).message}`)
    }
  }

  async show(id: string): Promise<Kid> {
    try {
      const connect = await database.connect()
      const sql = `SELECT *
                   FROM kids
                   WHERE id = $1`
      const results = await connect.query(sql, [id])
      connect.release()
      return results.rows[0]
    } catch (error) {
      throw new Error(`Unable to get kid by id, ${(error as Error).message}`)
    }
  }

  async showByUser(userId: string): Promise<Kid[]> {
    try {
      const connect = await database.connect()
      const sql = `SELECT *
                   FROM kids
                   WHERE user_id = $1`
      const results = await connect.query(sql, [userId])
      connect.release()
      return results.rows
    } catch (error) {
      throw new Error(`Unable to get kids by user id, ${(error as Error).message}`)
    }
  }

  async create(name: string, image: string, userId: string): Promise<Kid> {
    try {
      const connect = await database.connect()
      const sql = `INSERT INTO kids (name, image, user_id)
                   VALUES ($1, $2, $3)
                   RETURNING *`
      const results = await connect.query(sql, [name, image, userId])
      connect.release()
      return results.rows[0]
    } catch (error) {
      throw new Error(`Unable to create new kid, ${(error as Error).message}`)
    }
  }

  async update(id: string, name: string, image: string): Promise<Kid> {
    try {
      const connect = await database.connect()
      const select = await connect.query(
        `SELECT *
                                          FROM kids
                                          WHERE id = $1`,
        [id]
      )

      const sql = `UPDATE kids
                   SET name=$1,
                       image=$2
                   WHERE id = $3
                   RETURNING *`
      const results = await connect.query(sql, [
        name ? name : select.rows[0].name,
        image ? image : select.rows[0].image,
        id
      ])
      connect.release()
      return results.rows[0]
    } catch (error) {
      throw new Error(`Unable to update kid, ${(error as Error).message}`)
    }
  }

  async delete(id: string): Promise<Kid> {
    try {
      const connect = await database.connect()
      const sql = `DELETE
                   FROM kids
                   WHERE id = $1
                   RETURNING *`
      const results = await connect.query(sql, [id])
      connect.release()
      return results.rows[0]
    } catch (error) {
      throw new Error(`Unable to delete kid by id, ${(error as Error).message}`)
    }
  }
}

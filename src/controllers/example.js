
import logger from '../winston.js'
import { ExampleUserRO, ExampleUserRW } from '../models/example.js'

export const create = async (req, res) => {
  const { name, email } = req.query

  try {
    const newExampleUser = await ExampleUserRW.query().insert({ name, email })
    res.json({ data: newExampleUser })
  } catch (err) {
    logger.error(err)
    res.status(500).json({ error: err.message })
  }
}

export const get = async (req, res) => {
  const { email } = req.query

  try {
    const exampleUser = await ExampleUserRO.query().select('name', 'email').where({ email }).first()

    if (exampleUser) {
      res.json({ data: exampleUser })
    } else {
      res.status(404).json({ error: 'Not found' })
    }
  } catch (err) {
    logger.error(err)
    res.status(500).json({ error: err.message })
  }
}

export default {
  create,
  get
}

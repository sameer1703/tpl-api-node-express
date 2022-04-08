import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import logger from './winston.js'

import routes from './routes/index.js'

const app = express()

app.use(helmet())
app.use(cors())
app.use(morgan('combined', { stream: logger.stream }))
app.use('/:version', routes)

export default app

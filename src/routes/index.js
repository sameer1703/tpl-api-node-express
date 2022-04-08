import express from 'express'
import example from './example.js'

const router = express.Router()

router.use(example)

export default router

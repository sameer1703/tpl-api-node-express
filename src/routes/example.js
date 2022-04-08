import express from 'express'
import controllers from '../controllers/index.js'

const router = express.Router()

router.get('/example', controllers.example.get)
router.post('/example', controllers.example.create)

export default router

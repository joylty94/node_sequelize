import express from 'express'
import { addUser } from '../../controllers/v1/user.controller'

const router = express.Router()

router.route('/')
  .get(
    addUser
  )

export default router
import express from 'express'
import { join } from '../../controllers/v1/user.controller'

const router = express.Router()

router.route('/')
  .get(
    join
  )

export default router
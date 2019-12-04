import express from 'express'
import { deleteUser } from '../../controllers/v1/user.controller'

const router = express.Router()

router.route('/')
    .get(
        deleteUser
    )

export default router
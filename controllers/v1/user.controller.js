import moment from 'moment'
import { models } from '../../models'

const get = async (req, res, next) => {
    try {
        const users = await models.User.create(
            {
                email: 'test56@test.com',
                password: 'test123456',
                createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
                updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
            }
        )

        return res.json(users)
    } catch (e) {
        next(e)
    }
}

export {
    get
}
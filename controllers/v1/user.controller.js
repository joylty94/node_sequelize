import moment from 'moment'
import { models } from '../../models'

const join = async (req, res, next) => {
    try {
        const users = await models.User.create(
            {
                email: 'test567@test.com',
                password: 'test1234567',
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
    join
}
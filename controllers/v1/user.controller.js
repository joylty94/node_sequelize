import moment from 'moment'
import { models } from '../../models'

const addUser = async (req, res, next) => {
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

const get = async (req, res, next) => {
    try {
        const users = await models.User.findAll()

        return res.json(users)
    } catch (e) {
        next(e)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const users = await models.User.destroy({
            where: { id: 1 }
        })
        return res.json(users)
    } catch (e) {
        next(e)
    }
}

export {
    addUser,
    get,
    deleteUser
}
var {User} = require('../../models');

module.exports = {
    async getUserById(user_id) {
        const user = await User.findOne({
            where: {id: user_id}
        })

        return user
    },

    async create(data) {
        const user = User.build({
            firstName: data.firstName,
            lastName: data.lastName,
            cellphone: data.cellphone,
            birthDate: data.birthDate,
            points: data.points,
            password: data.password
        })

        await user.save()

        return user
    }
}


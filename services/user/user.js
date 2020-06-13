var {User} = require('../../models');

module.exports = {
    async getUserById(user_id) {
        const user = await User.findOne({
            where: {id: user_id}
        })

        return user
    }
}


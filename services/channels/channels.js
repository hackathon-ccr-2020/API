var {User, Channel, Post} = require('../../models');

module.exports = {
    getUserChannels(user_id) {
        return User.findOne({
            where: {id},
            include: [
                {
                    model: Channel,
                    as: 'channels'
                }
            ]
        })
    }
}

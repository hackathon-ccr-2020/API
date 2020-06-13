var {User, Friend} = require('../../models');

module.exports = {
    async getUserFriends(user_id) {
        const user = await User.findOne({
            where: {id: user_id},
            include: [
                {
                    model: Friend,
                    as: 'Friends'
                }
            ]
        })

        const user_ids = user.Friends.map((friend) => { return friend.secondaryFriend })

        const friends = await User.findAll({
            where: {'id': user_ids}
        })

        return friends
    }
}


var {User, Post, Channel} = require('../../models');

module.exports = {
    async getUserChannels(user_id) {
        user = await User.findOne({
            where: {id: user_id},
            include: [
                {
                    model: Channel,
                    as: 'Channels'
                }
            ]
        })

        return user.Channels
    },

    async getChannelContent(channel_id) {
        channel = await Channel.findOne({
            where: {id: channel_id},
            include: [
                {
                    model: Post,
                    as: 'Posts'
                }
            ]
        })

        return channel.Posts
    }
}


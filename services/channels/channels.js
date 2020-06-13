var {User, Channel, Post} = require('../../models');

module.exports = {
    async getUserChannels(user_id) {
        const user = await User.findOne({
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
        const channel = await Channel.findOne({
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

const service = require("../services/channels/channels.js");

exports.getUserChannels = async (req, res) => {
    channels = await service.getUserChannels(req.params.user_id)

    data = {
        data: {
            channels: channels
        }
    }

    res.send(data);
};

exports.getChannelContent = async (req, res) => {
    content = await service.getChannelContent(req.params.channel_id)

    data = {
        data: {
            posts: content
        }
    }

    res.send(data)
}

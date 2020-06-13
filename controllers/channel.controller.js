const {Channel, Post} = require("../models");

exports.getUserChannels = async (req, res) => {
  channels = [
    Channel.build({
        id: 1,
        name: "#Depressao"
    }),
    Channel.build({
        id: 2,
        name: "#PressaoAlta"
    }),
    Channel.build({
        id: 3,
        name: "#Postura"
    })
  ]

  res.send(channels);
};

exports.getChannelContent = async (req, res) => {
    content = {
        posts: [
            Post.build({
                id: 1,
                text: "nononono",
                user_id: 1
            }),
            Post.build({
                id: 2,
                text: "nononono",
                user_id: 1
            }),
        ],
    }

    res.send(content)
}

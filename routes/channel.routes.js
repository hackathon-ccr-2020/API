const controller = require("../controllers/channel.controller.js");

module.exports = app => {
    app.get("/channels/:channel_id/content", controller.getChannelContent);
};

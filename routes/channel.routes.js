module.exports = app => {
  const controller = require("../controllers/channel.controller.js");

  app.get("/channels", controller.getUserChannels);
  app.get("/channels/:channel_id/content", controller.getChannelContent);
};

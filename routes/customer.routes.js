module.exports = app => {
  const channelController = require("../controllers/channel.controller.js");
  const homeController = require("../controllers/home.controller.js");

  app.get("/user/:user_id/channels", channelController.getUserChannels);
  app.get("/user/:user_id/home", homeController.getUserHome);
};

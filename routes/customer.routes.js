module.exports = app => {
  const controller = require("../controllers/channel.controller.js");

  app.get("/user/:user_id/channels", controller.getUserChannels);
};

module.exports = app => {
  const channelController = require("../controllers/channel.controller.js");
  const homeController = require("../controllers/home.controller.js");
  const userController = require("../controllers/user.controller.js");

  app.post("/user", userController.createUser);
  app.get("/user/:user_id/home", homeController.getUserHome);
  app.get("/user/:user_id/home", homeController.getUserHome);
};

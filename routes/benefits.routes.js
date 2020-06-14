const controller = require("../controllers/benefits.js");

module.exports = app => {
    app.get("/benefits", controller.find);
};

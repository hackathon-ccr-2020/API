const controller = require("../controllers/medicines.controller");

module.exports = app => {  
    app.get("/medicines/:userId", controller.find);
    app.get("/medicines/:medicineId/content", controller.findOne);
    app.post("/medicine", controller.create);
};
  
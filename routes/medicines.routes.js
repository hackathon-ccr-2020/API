const controller = require("../controllers/medicines.controller");

module.exports = app => {  
    app.get("/medicines/:userId", controller.find);
    app.get("/medicines/:medicineId/content", controller.findOne);
    app.post("/medicine", controller.create);
    app.get("/medicines/:userId/historic", controller.findAllHistoric);
    app.post("/medicines/historic", controller.createHistoric);
};
  
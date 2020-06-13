const Customer = require("../models/customer.model.js");

exports.create = async (req, res) => {

  const customer = new Customer({
    email: req.body.email,
    name: req.body.name,
    active: req.body.active
  });


  const data = await Customer.create(customer);
  res.send(data);
};

exports.findAll = (req, res) => {
  Customer.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message
      });
    else res.send(data);
  });
};
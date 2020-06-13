const service = require('./../services/medicines/medicines');

exports.find = async (req, res) => {
    const medicines = await service.find(req.params.userId);
    res.send(medicines);       
}

exports.findOne = async (req, res) => {
    const medicine = await service.findOne(req.params.medicineId);
    res.send(medicine);       
}

exports.create = async (req, res) => {
    const medicine = await service.create(req.body);
    res.send(medicine);       
}

exports.createHistoric = async (req, res) => {
    const medicines = await service.createHistoric(req.body);
    res.send(medicines);       
}

exports.findAllHistoric = async (req, res) => {
    const medicines = await service.findAllHistoric(req.params.userId);
    res.send(medicines);       
}

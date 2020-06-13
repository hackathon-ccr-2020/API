const service = require('./../services/benefits/benefits');

exports.find = async (req, res) => {
    const benefits = await service.find();
    res.send(benefits);       
}
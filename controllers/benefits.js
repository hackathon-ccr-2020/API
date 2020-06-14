const service = require('./../services/benefits/benefits');

exports.find = async (req, res) => {
    const benefits = await service.find();

    data = {
        data: {
            benefits: benefits
        }
    }

    res.send(data);
}

const service = require('./../services/medicines/medicines');

exports.find = async (req, res) => {
    const medicines = await service.find(req.params.userId);

    data = {
        data: {
            medicines: medicines
        }
    }

    res.send(data);
}

exports.findOne = async (req, res) => {
    const medicine = await service.findOne(req.params.medicineId);

    data = {
        data: {
            medicine: medicine
        }
    }

    res.send(data);
}

exports.create = async (req, res) => {
    const medicine = await service.create(req.body);

    data = {
        data: {
            medicine: medicine
        }
    }

    res.send(data);
}

exports.createHistoric = async (req, res) => {
    const medicines = await service.createHistoric(req.body);

    data = {
        data: {
            history: medicines
        }
    }

    res.send(data);
}

exports.findAllHistoric = async (req, res) => {
    const medicines = await service.findAllHistoric(req.params.userId);

    data = {
        data: {
            history: medicines
        }
    }

    res.send(data);
}

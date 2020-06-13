const healthService = require("../services/health/health.js");

exports.createUserHealth = async (req, res) => {
    health = await healthService.create(req.params.user_id, req.body)

    data = {
        data: {
            health: health
        }
    }

    res.send(data);
};

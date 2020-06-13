var { Benefit } = require('../../models');


module.exports = {
    async find() {
        return await Benefit.findAll();
    }
}

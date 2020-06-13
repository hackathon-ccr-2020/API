var models = require('../../models');

module.exports = {
    findOne(id){
        return models.Medicines.findOne({
            where: {id}
        })
    }
}
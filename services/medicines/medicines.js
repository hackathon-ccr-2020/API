const { Medicines, MedicinesHours } = require('../../models');

// relations
Medicines.hasMany(MedicinesHours, { foreignKey: 'medicinesId' });
MedicinesHours.belongsTo(Medicines, { foreignKey: 'id' });

module.exports = {
    async find(userId) {
        try {
            return await Medicines.findAll({
                where: {
                    userId: userId,
                },
                include: [
                    {
                        model: MedicinesHours,
                        attributes: ['hours']
                    }
                ]

            })
        } catch (error) {
            throw error;
        }
    },
    async findOne(id) {
        try {
            return await Medicines.findAll({
                where: {
                    id: id
                },
                include: [
                    {
                        model: MedicinesHours
                    }
                ]
            })
        } catch (error) {
            throw error;
        }
    },
    async create(payload) {
        try {
            const medicine = await Medicines.build({
                userId: payload.userId,
                name: payload.name,
                days: payload.days
            }).save();

            for (let index = 0; index < payload.horarios.length; index++) {
                const element = payload.horarios[index];
                await MedicinesHours.build({
                    medicinesId: medicine.id,
                    userId: medicine.userId,
                    hours: element
                }).save();
            }

            return medicine;
        } catch (error) {
            throw error;
        }        
    }
}
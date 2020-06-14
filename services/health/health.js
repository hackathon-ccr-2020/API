var {Health} = require('../../models');

module.exports = {
    async create(user_id, data) {
        const health = Health.build({
            height: data.height,
            weight: data.weight,
            continuousMedication: data.continuousMedication,
            medicalMonitoring: data.medicalMonitoring,
            psychologicalMonitoring: data.psychologicalMonitoring,
            physicalExercises: data.physicalExercises,
            sleep: data.sleep,
            sight: data.sight,
            mentalHealth: data.mentalHealth,
            userId: user_id
        })

        await health.save()

        return health
    }
}


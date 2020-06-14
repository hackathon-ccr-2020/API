module.exports = (sequelize, DataTypes) => {
    const Health = sequelize.define('Health', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        height: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        weight: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        continuousMedication: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
        },
        medicalMonitoring: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        },
        psychologicalMonitoring: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        },
        physicalExercises: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        sleep: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        sight: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        mentalHealth: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        diseases: {
            allowNull: true,
            type: DataTypes.INTEGER
        },
        userId: {
            allowNull: false,
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false,
        tableName: "health"
    });

   return Health;
}

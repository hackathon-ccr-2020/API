
module.exports = (sequelize, DataTypes) => {
    const Medicines = sequelize.define('Medicines', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        userId: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
        days: {
            allowNull: false,
            type: DataTypes.STRING(10),
        },
        points: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
    }, {
        timestamps: false,
        tableName: "medicines"
    });

    return Medicines;
}

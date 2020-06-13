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
            type: DataTypes.ARRAY(10),
       }
    }, {timestamps: false});

    return Medicines;
 }

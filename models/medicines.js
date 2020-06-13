export default function (sequelize, DataTypes) {
    const Medicines = sequelize.define('Medicines', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        userId: {
            allowNull: false,
            type: Sequelize.INTEGER,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
        days: {
            allowNull: false,
            type: DataTypes.ARRAY(10),
        }
    });
 
    return Medicines;
 }
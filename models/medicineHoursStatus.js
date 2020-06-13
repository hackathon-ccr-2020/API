module.exports = (sequelize, DataTypes) => {
    const MedicineHoursStatus = sequelize.define('MedicineHoursStatus', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        medicinesHoursId: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        hours: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        status: {
            allowNull: false,
            type: DataTypes.INTEGER,
        }
    });

    return MedicineHoursStatus;
 }

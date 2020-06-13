export default function (sequelize, DataTypes) {
    const MedicineHoursStatus = sequelize.define('MedicineHoursStatus', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        medicinesHoursId: {
            allowNull: false,
            type: Sequelize.INTEGER,
        },
        hours: {
            allowNull: false,
            type: Sequelize.DATETIME,
        },
        status: {
            allowNull: false,
            type: Sequelize.INTEGER,
        }
    });
 
    return MedicineHoursStatus;
 }
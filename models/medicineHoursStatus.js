module.exports = (sequelize, DataTypes) => {
    const MedicineHoursStatus = sequelize.define('MedicineHoursStatus', {
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
        medicineId: {
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
    }, {timestamps: false, tableName: "medicinesHoursStatus"});

    return MedicineHoursStatus;
 }

module.exports = (sequelize, DataTypes) => {
    const MedicinesHours = sequelize.define('MedicinesHours', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        medicinesId: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        userId: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        hours: {
            allowNull: false,
            type: DataTypes.STRING,
       }
    }, {timestamps: false, tableName: "medicinesHours"});

    return MedicinesHours;
 }

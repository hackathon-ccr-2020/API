export default function (sequelize, DataTypes) {
    const MedicinesHours = sequelize.define('MedicinesHours', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        medicinesId: {
            allowNull: false,
            type: Sequelize.INTEGER,
        },
        userId: {
            allowNull: false,
            type: Sequelize.INTEGER,
        },
        hours: {
            allowNull: false,
            type: Sequelize.DATETIME,
        }
    });
 
    return MedicinesHours;
 }
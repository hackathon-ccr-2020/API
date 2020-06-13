import * as bcrypt from 'bcrypt';

module.exports = (sequelize, DataTypes) {
   const Health = sequelize.define('Health', {
      id: {
         type: DataTypes.Integer,
         primaryKey: true,
         autoIncrement: true
      },
      height: {
         allowNull: false,
         type: DataTypes.STRING,
      },
      weight: {
         allowNull: false,
         type: DataTypes.STRING,
      },
      continousMedication: {
         allowNull: false,
         type: DataTypes.Integer,
      },
      medicalMonitoring: {
         allowNull: false,
         type: DataTypes.Integer
      },
      psychologicalMonitoring: {
         allowNull: false,
         type: DataTypes.Integer
      },
      physicalExercises: {
         allowNull: false,
         type: DataTypes.Integer
      },
      sleep: {
         allowNull: false,
         type: DataTypes.Integer
      },
      sight: {
         allowNull: false,
         type: DataTypes.Integer
      },
      mentalHealth: {
         allowNull: false,
         type: DataTypes.Integer
      },
      diseases: {
         allowNull: false,
         type: DataTypes.Integer
      }
   });

   return Health;
}

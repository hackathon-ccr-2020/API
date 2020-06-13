import * as bcrypt from 'bcrypt';

module.exports = (sequelize, DataTypes) => {
   const Health = sequelize.define('Health', {
      id: {
         type: DataTypes.INTEGER,
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
         type: DataTypes.INTEGER,
      },
      medicalMonitoring: {
         allowNull: false,
         type: DataTypes.INTEGER
      },
      psychologicalMonitoring: {
         allowNull: false,
         type: DataTypes.INTEGER
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
         allowNull: false,
         type: DataTypes.INTEGER
      }
   });

   return Health;
}

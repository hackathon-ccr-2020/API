'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('health', {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      height: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      weight: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      continousMedication: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      medicalMonitoring: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      psychologicalMonitoring: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      physicalExercises: {
         allowNull: false,
         type: Sequelize.INTEGER
      },
      sleep: {
         allowNull: false,
         type: Sequelize.INTEGER
      },
      sight: {
         allowNull: false,
         type: Sequelize.INTEGER
      },
      mentalHealth: {
         allowNull: false,
         type: Sequelize.INTEGER
      },
      diseases: {
         allowNull: false,
         type: Sequelize.INTEGER
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('health');
  }
};

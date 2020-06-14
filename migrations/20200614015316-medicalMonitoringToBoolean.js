'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.removeColumn('health', 'medicalMonitoring'),
        queryInterface.addColumn(
            'health',
            'medicalMonitoring',
            {
                allowNull: false,
                type: Sequelize.BOOLEAN
            }
        )
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.removeColumn('health', 'medicalMonitoring'),
        queryInterface.addColumn(
            'health',
            'medicalMonitoring',
            {
                allowNull: false,
                type: Sequelize.INTEGER
            }
        )
    ])
  }
};

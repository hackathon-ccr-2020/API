'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.removeColumn('health', 'psychologicalMonitoring'),
        queryInterface.addColumn(
            'health',
            'psychologicalMonitoring',
            {
                allowNull: false,
                type: Sequelize.BOOLEAN
            }
        )
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.removeColumn('health', 'psychologicalMonitoring'),
        queryInterface.addColumn(
            'health',
            'psychologicalMonitoring',
            {
                allowNull: false,
                type: Sequelize.INTEGER
            }
        )
    ])
  }
};

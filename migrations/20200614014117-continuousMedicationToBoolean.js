'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.removeColumn('health', 'continousMedication'),
        queryInterface.addColumn(
            'health',
            'continuousMedication',
            {
                allowNull: false,
                type: Sequelize.BOOLEAN
            }
        )
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.removeColumn('health', 'continuousMedication'),
        queryInterface.addColumn(
            'health',
            'continousMedication',
            {
                allowNull: false,
                type: Sequelize.INTEGER
            }
        )
    ])
  }
};

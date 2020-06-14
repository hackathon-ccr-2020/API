'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.removeColumn('health', 'weight'),
        queryInterface.addColumn(
            'health',
            'weight',
            {
                allowNull: false,
                type: Sequelize.INTEGER
            }
        )
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.removeColumn('health', 'weight'),
        queryInterface.addColumn(
            'health',
            'weight',
            {
                allowNull: false,
                type: Sequelize.STRING(100)
            }
        )
    ])
  }
};

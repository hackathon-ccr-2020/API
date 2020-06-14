'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.removeColumn('health', 'height'),
        queryInterface.addColumn(
            'health',
            'height',
            {
                allowNull: false,
                type: Sequelize.INTEGER
            }
        )
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.removeColumn('health', 'height'),
        queryInterface.addColumn(
            'health',
            'height',
            {
                allowNull: false,
                type: Sequelize.STRING(100)
            }
        )
    ])
  }
};

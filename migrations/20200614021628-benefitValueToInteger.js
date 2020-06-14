'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.removeColumn('benefits', 'value'),
        queryInterface.addColumn(
            'benefits',
            'value',
            {
                allowNull: false,
                type: Sequelize.INTEGER
            }
        )
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.removeColumn('health', 'value'),
        queryInterface.addColumn(
            'benefits',
            'value',
            {
                allowNull: false,
                type: Sequelize.STRING(50)
            }
        )
    ])
  }
};

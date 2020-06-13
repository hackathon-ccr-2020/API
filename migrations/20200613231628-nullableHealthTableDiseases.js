'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
        'health',
        'diseases',
        {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
        'health',
        'diseases',
        {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    )
  }
};

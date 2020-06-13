'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
        'users',
        'password',
        {
            type: Sequelize.STRING(255),
            allowNull: false
        }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
        'users',
        'password',
        {
            type: Sequelize.STRING(45),
            allowNull: false
        }
    )
  }
};

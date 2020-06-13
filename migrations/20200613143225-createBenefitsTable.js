'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('benefits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      value: {
        allowNull: false,
        type: Sequelize.STRING(50)
      }
    })
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('benefits')
  }
};

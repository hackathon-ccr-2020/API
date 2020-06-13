'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('channels', {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100)
      }
   })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('channels')
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      text: {
        allowNull: false,
        type: Sequelize.STRING(250),
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comments');
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('friends', {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstFriend: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      lastFriend: {
        allowNull: false,
        type: Sequelize.STRING(100),
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('friends');
  }
};

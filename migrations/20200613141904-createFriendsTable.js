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
        type: Sequelize.INTEGER,
      },
      secondaryFriend: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('friends');
  }
};

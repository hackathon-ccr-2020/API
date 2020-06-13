'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('channel_user', {
      channel_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('channel_user');
  }
};

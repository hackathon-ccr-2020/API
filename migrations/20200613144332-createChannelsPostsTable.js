'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('channel_post', {
      channel_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      post_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('channel_post');
  }
};

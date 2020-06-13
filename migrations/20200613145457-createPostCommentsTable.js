'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('post_comment', {
      post_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      comment_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('post_comment');
  }
};

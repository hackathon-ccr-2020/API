'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('channel_user', 'id', {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('channel_user', 'id');
  }
};

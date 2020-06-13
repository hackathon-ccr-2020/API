'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      cellphone: {
        allowNull: false,
        type: Sequelize.STRING(11),
      },
      birthDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      points: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(45)
      }
    })
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};

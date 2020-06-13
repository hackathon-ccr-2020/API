'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      cellphone: {
        allowNull: false,
        type: DataTypes.STRING(11),
      },
      birthDate: {
        allowNull: false,
        type: DataTypes.DATE
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(45)
      }
    }
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};

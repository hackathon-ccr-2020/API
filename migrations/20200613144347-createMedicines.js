'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('medicines', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			userId: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			days: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			points: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('medicines');
	}
};

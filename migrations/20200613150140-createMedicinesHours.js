'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('medicinesHours', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			medicinesId: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			userId: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			hours: {
				allowNull: false,
				type: Sequelize.STRING(10),
			}
		})
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('medicinesHours');
	}
};

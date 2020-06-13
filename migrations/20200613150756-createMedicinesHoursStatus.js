'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('medicinesHoursStatus', {
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
			medicineId: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			hours: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			status: {
				allowNull: false,
				type: Sequelize.INTEGER,
			}
		})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('medicinesHoursStatus');
	}
};

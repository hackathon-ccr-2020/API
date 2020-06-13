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
				type: DataTypes.STRING(100),
			},
			days: {
				allowNull: false,
				type: DataTypes.ARRAY(10),
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('medicines');
	}
};

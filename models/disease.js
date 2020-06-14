module.exports = (sequelize, DataTypes) => {
    const Disease = sequelize.define('Disease', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        }
    }, {
        timestamps: false,
        tableName: "diseases"
    });

   return Disease;
}

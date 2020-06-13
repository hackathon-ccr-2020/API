export default function (sequelize, DataTypes) {
    const Channel = sequelize.define('Channel', {
        id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        }
    });

    return Channel;
}

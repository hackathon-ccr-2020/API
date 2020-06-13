module.exports = (sequelize, DataTypes) => {
    const Channel = sequelize.define('Channel', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
       }
    }, { timestamps: false, tableName: "channels" });

    Channel.associate = function (models) {
        Channel.belongsToMany(models.User, { as: 'Users', through: { model: models.ChannelUser }, foreignKey: 'channel_id'})
        Channel.hasMany(models.Post, { as: 'Posts', foreignKey: 'channel_id'})
    }

    return Channel;
}

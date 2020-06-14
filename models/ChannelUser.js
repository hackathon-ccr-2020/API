module.exports = (sequelize, DataTypes) => {
    const ChannelUser = sequelize.define('ChannelUser', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        channel_id: {
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER
       }
    }, {
        timestamps: false,
        tableName: "channel_user"
    });

    ChannelUser.associate = function (models) {
        ChannelUser.belongsTo(models.User, { as: 'User', foreignKey: 'user_id'})
        ChannelUser.belongsTo(models.Channel, { as: 'Channel', foreignKey: 'channel_id'})
    }

    return ChannelUser;
}

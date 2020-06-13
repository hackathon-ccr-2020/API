module.exports = (sequelize, DataTypes) => {
   const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        lastName: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        cellphone: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        birthDate: {
            allowNull: false,
            type: DataTypes.DATE
        },
        points: {
            allowNull: true,
            type: DataTypes.INTEGER
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
   }, {timestamps: false, tableName: "users"});

    User.associate = function (models) {
        User.belongsToMany(models.Channel, { as: 'Channels', through: { model: models.ChannelUser }, foreignKey: 'user_id'})
        User.hasMany(models.Friend, { as: 'Friends', foreignKey: 'firstFriend'})
    }

   return User;
}

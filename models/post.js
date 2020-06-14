module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        user_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
       },
       channel_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
       },
       points: {
            allowNull: true,
            type: DataTypes.INTEGER
       }
    },{
        timestamps: false,
        tableName: "posts"
    });

    Post.associate = function (models) {
        Post.belongsTo(models.Channel, { as: 'Channel', foreignKey: 'channel_id'})
    }

    return Post;
}

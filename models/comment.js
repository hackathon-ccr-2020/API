module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
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
       }
    }, {
        timestamps: false,
        tableName: "comments"
    });

    Comment.associate = function (models) {
        Comment.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
    }

    return Comment;
}

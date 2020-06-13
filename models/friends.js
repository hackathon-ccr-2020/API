module.exports = (sequelize, DataTypes) => {
   const Friend = sequelize.define('Friend', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true
      },
      firstFriend: {
         allowNull: false,
         type: DataTypes.INTEGER,
      },
      secondaryFriend: {
         allowNull: false,
         type: DataTypes.INTEGER,
      }
   });

   return Friend;
}

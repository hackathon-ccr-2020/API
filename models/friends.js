export default function (sequelize, DataTypes) {
   const Friend = sequelize.define('Friend', {
      id: {
         type: DataTypes.Integer,
         primaryKey: true,
         autoIncrement: true
      },
      firstFriend: {
         allowNull: false,
         type: DataTypes.Integer,
      },
      secondaryFriend: {
         allowNull: false,
         type: DataTypes.Integer,
      }
   });

   return Friend;
}
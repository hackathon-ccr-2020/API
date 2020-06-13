module.exports = (sequelize, DataTypes) => {
   const Disease = sequelize.define('Disease', {
      id: {
         type: DataTypes.Integer,
         primaryKey: true,
         autoIncrement: true
      },
      name: {
         allowNull: false,
         type: DataTypes.STRING,
      }
   });

   return Disease;
}

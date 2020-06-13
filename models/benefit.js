module.exports = (sequelize, DataTypes) {
   const Benefit = sequelize.define('Benefit', {
      id: {
         type: DataTypes.Integer,
         primaryKey: true,
         autoIncrement: true
      },
      name: {
         allowNull: false,
         type: DataTypes.STRING,
      },
      value: {
         allowNull: false,
         type: DataTypes.Integer,
      }
   });

   return Benefit;
}

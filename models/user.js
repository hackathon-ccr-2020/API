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
       password: {
         allowNull: false,
         type: DataTypes.STRING
       }
   });

   return User;
}

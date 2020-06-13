import * as bcrypt from 'bcrypt';

export default function (sequelize, DataTypes) {
   const User = sequelize.define('User', {
      id: {
         type: DataTypes.Integer,
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

   User.beforeCreate((user) => {
      return hashPassword(user);
   });

   User.beforeUpdate((user) => {
      return hashPassword(user);
   });

   function hashPassword(user)  {
      const salt = bcrypt.genSaltSync(10);
      user.set('password', bcrypt.hashSync(user.password, salt));
   }

   return User;
}
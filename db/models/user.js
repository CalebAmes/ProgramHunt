'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    profilePictureId: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Program, { foreignKey: 'userId' });
  };
  return User;
};

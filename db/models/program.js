'use strict';
module.exports = (sequelize, DataTypes) => {
  const Program = sequelize.define('Program', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    video: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Program.associate = function(models) {
    Program.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Program;
};

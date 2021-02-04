'use strict';
module.exports = (sequelize, DataTypes) => {
  const Program = sequelize.define('Program', {
    name: DataTypes.STRING,
    bio: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    video: DataTypes.STRING,
    image: DataTypes.STRING,
    likes: DataTypes.INTEGER
  }, {});
  Program.associate = function(models) {
    Program.belongsTo(models.User, { foreignKey: 'userId' });
    Program.hasMany(models.Comment, { foreignKey: 'programId' })
  };
  return Program;
};

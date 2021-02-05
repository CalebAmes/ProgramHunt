'use strict';
module.exports = (sequelize, DataTypes) => {
  const Program = sequelize.define('Program', {
    name: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    bio: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    video: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Program.associate = function(models) {
    Program.belongsTo(models.User, { foreignKey: 'userId' });
    Program.hasMany(models.Comment, { foreignKey: 'programId' });
    Program.hasMany(models.Like, { foreignKey: 'programId' });

  };
  return Program;
};

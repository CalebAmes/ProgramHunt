'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    programId: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, { foreignKey: 'userId' });
    Comment.belongsTo(models.Program, { foreignKey: 'programId' });

  };
  return Comment;
};

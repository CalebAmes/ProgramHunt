'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      email: {
        unique: true,
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      hashedPassword: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      profilePictureId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Programs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true
      },
      thumbnail: {
        type: Sequelize.STRING
      },
      bio: {
        allowNull: false,
        type: Sequelize.STRING(75)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      video: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Programs');
  }
};

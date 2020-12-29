'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      drink_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Spirits",
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
        },
      },
      userRating: {
        type: Sequelize.INTEGER,
      },
      userReview: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      imageUrl: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Date.now(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Date.now(),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Posts');
  }
};
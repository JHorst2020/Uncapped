'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Spirits", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      brandName: {
        type: Sequelize.STRING,
      },
      scotchName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      region: {
        type: Sequelize.STRING,
      },
      abv: {
        type: Sequelize.INTEGER,
      },
      spiritStyle: {
        type: Sequelize.STRING,
      },
      avgRating: {
        type: Sequelize.INTEGER,
      },
      scotchUrl: {
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
    return queryInterface.dropTable('Spirits');
  }
};
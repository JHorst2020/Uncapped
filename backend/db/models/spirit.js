'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spirit = sequelize.define('Spirit', {
    brandName: DataTypes.STRING,
    scotchName: DataTypes.STRING,
    country: DataTypes.STRING,
    region: DataTypes.STRING,
    abv: DataTypes.INTEGER,
    spiritStyle: DataTypes.STRING,
    avgRating: DataTypes.INTEGER,
    scotchUrl: DataTypes.STRING
  }, {});
  Spirit.associate = function(models) {
    // associations can be defined here
    Spirit.hasMany(models.Post, {foreignKey:"drink_id"})
  };
  return Spirit;
};
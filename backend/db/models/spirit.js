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

  Spirit.newSpirit = async function ({brandName, scotchName,country,region,abv,spiritStyle,scotchUrl}){
    const spirit = await Spirit.create({brandName,scotchName,country,region,abv,spiritStyle,scotchUrl});
    return
  }

  // db / models / spirit
  Spirit.updateThisSpirit = async function ({id, brandName, scotchName,country,region,abv,spiritStyle,scotchUrl}){
    const [_unused1, spirit] = await Spirit.update(
      {brandName,
      scotchName,
      country,
      region,
      abv,
      spiritStyle,
      scotchUrl}
    , {where: {id}, returning:true, plain:true});
    return spirit
  }


  return Spirit;
};
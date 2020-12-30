'use strict';
module.exports = (sequelize, DataTypes) => {
  const Badge = sequelize.define('Badge', {
    badgeName: DataTypes.STRING,
    badgeDesc: DataTypes.STRING,
    badgeUrl: DataTypes.STRING
  }, {});
  Badge.associate = function(models) {
    // associations can be defined here
    // Badge.belongsToMany(models.User, {through: models.EarnedBadge})
    Badge.hasMany(models.EarnedBadge, {foreignKey: "badge_id"})
  };
  return Badge;
};
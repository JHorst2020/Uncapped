'use strict';
module.exports = (sequelize, DataTypes) => {
  const EarnedBadge = sequelize.define('EarnedBadge', {
    user_id: DataTypes.INTEGER,
    badge_id: DataTypes.INTEGER
  }, {});
  EarnedBadge.associate = function(models) {
    // associations can be defined here
    EarnedBadge.belongsTo(models.User,{foreignKey:"user_id"})
    EarnedBadge.belongsTo(models.Badge, {foreignKey: "badge_id"})
  };
  return EarnedBadge;
}; 
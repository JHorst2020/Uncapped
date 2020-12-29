'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    post_id: DataTypes.INTEGER,
    commenter_id: DataTypes.INTEGER,
    commentText: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Post, {foreignKey: "post_id"})
    Comment.belongsTo(models.User, {foreignKey: "commenter_id"})
  };
  return Comment;
};
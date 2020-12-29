'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    drink_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    userRating: DataTypes.INTEGER,
    userReview: DataTypes.STRING,
    location: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.User,{foreignKey:"user_id"})
    Post.belongsTo(models.Spirit, {foreignKey:"drink_id"})
    Post.hasMany(models.Comment, {foreignKey:"post_id"})
  };
  return Post;
};
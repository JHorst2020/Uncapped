const express = require("express");
const asyncHandler = require("express-async-handler");

const { Post, User, Spirit } = require("../../db/models");
const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const posts = await Post.findAll({
      include: [User, Spirit],
      order: [['createdAt','DESC']]
    });
    res.json(posts);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const posts = await Post.findAll({
      where: {user_id: req.params.id},
      include: [User, Spirit],
      order: [["createdAt", "DESC"]],
    });
    res.json(posts);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res) => {
    const {
      drink_id,
      user_id,
      userRating,
      userReview,
      location,
      imageUrl,
    } = req.body;
    const newSpiritReview = await Post.newReview({
      drink_id,
      user_id,
      userRating,
      userReview,
      location,
      imageUrl,
    });
    return res.json({ newSpiritReview });
  })
);



module.exports = router;

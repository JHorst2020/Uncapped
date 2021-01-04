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

router.get("/:id/count", asyncHandler(async (req, res)=> {
  const {count} = await Post.findAndCountAll({
    where: { user_id: req.params.id },
  });
  res.json(count)
}))

router.get('/scotch/:id', asyncHandler(async (req, res)=> {
  const posts = await Post.findAll({
    where: { drink_id: req.params.id },
    include: [User, Spirit],
    order: [["id", "DESC"]],
  });
  res.json(posts);
}))

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

router.delete(
  "/:id",
  asyncHandler(async (req,res) => {
    const deletePost = await Post.destroy({
      where: {
        id: req.params.id
      }
    })
  })
)


module.exports = router;

const express = require("express")
const asyncHandler = require("express-async-handler");

const {Post, User, Spirit} = require('../../db/models')
const router = express.Router()

router.get("/", asyncHandler(async (req, res) => {
    const posts = await Post.findAll({
        include: [User, Spirit]
    }); 
    res.json(posts)
}))

module.exports = router
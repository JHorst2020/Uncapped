const express = require("express");
const asyncHandler = require("express-async-handler");
const { Spirit } = require("../../db/models");
const router = express.Router();
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const spirits = await Spirit.findAll();
    res.json(spirits);
  })
);




module.exports = router;

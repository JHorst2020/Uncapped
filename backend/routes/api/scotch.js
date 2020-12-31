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

router.get("/:id", async (req, res) => {
  const oneScotch = await Spirit.findAll({
    where: {
      id: req.params.id
    }
  })
  res.json(oneScotch)
  
  
});


module.exports = router;

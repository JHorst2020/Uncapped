const express = require("express");
const asyncHandler = require("express-async-handler");

const { Spirit, Post } = require("../../db/models");

const router = express.Router();

 
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const spirits = await Spirit.findAll({
      order: [["id", "DESC"]]
    });
    res.json(spirits);
  })
);

router.get("/:id", async (req, res) => {
  const oneScotch = await Spirit.findAll({
    where: {
      id: req.params.id
    },
    include: [Post]
  })
  res.json(oneScotch)
  
  
});

// scotch api

router.put("/update/:id",asyncHandler(async function (req, res){
  const {
    id,
    scotchName,
    country,
    region,
    spiritSyle,
    scotchUrl,
  } = req.body;
  const updatedScotch = await Spirit.update(
    {scotchName,
    country,
    region,
    spiritSyle,
    scotchUrl}, {where: {id}, returning:true, plain:true}
  );
  res.json(updatedScotch)
}))

router.post("/", asyncHandler(async (req, res) => {
  const {
    brandName,
    scotchName,
    country,
    region,
    abv,
    spiritSyle,
    scotchUrl
  } = req.body;
  const newScotch = await Spirit.newSpirit({
    brandName,
    scotchName,
    country,
    region,
    abv,
    spiritSyle,
    scotchUrl,
  });
  return res.json({newScotch})
}))


module.exports = router;

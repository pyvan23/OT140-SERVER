const express = require("express");
const { createCategorie , deleteCategorie } = require("../controllers/categories");

const router = express.Router();

router.post("/", createCategorie);

router.delete("/:id", deleteCategorie);


module.exports = router;

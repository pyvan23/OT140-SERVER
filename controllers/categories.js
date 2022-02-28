const db = require("../models/index");

const createCategorie = async (req, res) => {
  try {
    const name = req.body.name;

    if (typeof name === "string") {
      const newCategorie = await db.Categories.create({ name: name });
      res.json(`categorie was created`);
    }
  } catch (error) {
    res.json(`the name is not a string`);
  }
};

const deleteCategorie = async (req, res) => {
  const  {id}  = req.params;
  console.log(id);
  try {
    
    
    await db.Categories.destroy({
      where: {
        id: id,
      },
    });
    res.json("categorie was deleted succefully ");
  } catch (error) {
    res.json('id no encontrado');
  }
};

module.exports = { createCategorie, deleteCategorie };

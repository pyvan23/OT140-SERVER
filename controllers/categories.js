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
  try {
    const { id } = req.params;

    const categorie = await db.Categories.findByPk(id);

    if (!categorie) {

        res.status(404).json('The comment does not exist');

    } else {

        await db.Categories.destroy( {
            where: { id: id }
        })

        const response = {
            status: 201,
            msg: 'deleted commentary',
        }
        res.status(201).json({ response })
    }


} catch (err) {
    const response = {
        status : 500,
        msg :'internal server error'
    }
    res.status(500).json({ response })
}
};

module.exports = { createCategorie, deleteCategorie };

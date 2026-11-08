const table = require("../../table/cars");

const addCars = async (req, res) => {
  try {
    const newCars = new table(req.body);
    await newCars.save();
    return res.status(201).json(newCars);
  } catch (error) {
    console.error(error);
    return res.status(500).send("გუნდის დამატება ვერ მოხერხდა");
  }
};

module.exports = { addCars };
const table = require("../../table/team");

const addTeam = async (req, res) => {
  try {
    const newTeam = new table(req.body);
    await newTeam.save();
    return res.status(201).json(newTeam);
  } catch (error) {
    console.error(error);
    return res.status(500).send("გუნდის დამატება ვერ მოხერხდა");
  }
};

module.exports = { addTeam };
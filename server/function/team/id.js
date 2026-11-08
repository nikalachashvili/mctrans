const table = require("../../table/team");

const getTeamById = async (req, res) => {
  try {
    const member = await table.findById(req.params.id);
    if (!member) return res.status(404).send("წევრი ვერ მოიძებნა");
    return res.status(200).json(member);
  } catch (error) {
    console.error(error);
    return res.status(500).send("შეცდომა გუნდის წამოღებისას");
  }
};

module.exports = { getTeamById };
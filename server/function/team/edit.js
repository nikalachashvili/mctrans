const table = require("../../table/team");

const editTeam = async (req, res) => {
  try {
    const updated = await table.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).send("წევრი ვერ მოიძებნა ჩასასწორებლად");
    return res.status(200).json(updated);
  } catch (error) {
    console.error(error);
    return res.status(500).send("გუნდის განახლების შეცდომა");
  }
};

module.exports = { editTeam };
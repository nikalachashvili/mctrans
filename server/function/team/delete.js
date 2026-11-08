const table = require("../../table/team");

const deleteTeam = async (req, res) => {
  try {
    const deleted = await table.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).send("წევრი ვერ მოიძებნა წასაშლელად");
    return res.status(200).send("წაშლა წარმატებულია");
  } catch (error) {
    console.error(error);
    return res.status(500).send("წაშლის შეცდომა");
  }
};

module.exports = { deleteTeam };
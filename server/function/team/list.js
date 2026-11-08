const table = require("../../table/team");

const getTeams = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 3;
  const startIndex = (page - 1) * limit;

  try {
    const total = await table.countDocuments();
    const teams = await table
      .find()
      .skip(startIndex)
      .limit(limit)
      .sort({ createDate: -1 });

    return res.status(200).json({
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      totalItems: total,
      data: teams,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("შეცდომა მოხდა გუნდის წამოღებისას");
  }
};

module.exports = { getTeams };
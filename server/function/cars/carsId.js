const table = require("../../table/cars");

const getCarsId = async (req, res) => {
  const { id } = req.params;
  console.log(1)

  try {
    const cars = await table.findById(id);

    if (!cars) {
      return res.status(404).send("ბლოგი ვერ მოიძებნა");
    }

    return res.status(200).json(cars);
  } catch (error) {
    console.error(error);
    return res.status(500).send("მოხდა შეცდომა ბლოგის წამოღებისას");
  }
};

module.exports = { getCarsId };

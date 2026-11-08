const table = require("../../table/cars");

const deleteCars = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteCars = await table.findByIdAndDelete(id);

    if (!deleteCars) {
      return res.status(404).send("ბლოგი ვერ მოიძებნა წასაშლელად");
    }

    return res.status(200).send({ message: "ბლოგი წაიშალა წარმატებით" });
  } catch (error) {
    console.error("Blog delete error:", error);
    return res.status(500).send("ბლოგის წაშლის შეცდომა");
  }
};

module.exports = { deleteCars };

const table = require("../../table/cars");

const editCars = async (req, res) => {
  try {
    const { title, body, cover, fwd, kolofi, dzravi, price } = req.body;
    const { id } = req.params;

    const updatedBlog = await table.findByIdAndUpdate(
      id,
      {
        title,
        body,
        price,
        cover,
        fwd,
        kolofi,
        dzravi
        // updatedAt: new Date(), // დაამატე განახლების თარიღი
      },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).send("ბლოგი ვერ მოიძებნა");
    }

    return res.status(200).send(updatedBlog);
  } catch (error) {
    console.error("Blog update error:", error);
    return res.status(500).send("ბლოგის განახლების შეცდომა");
  }
};

module.exports = { editCars };

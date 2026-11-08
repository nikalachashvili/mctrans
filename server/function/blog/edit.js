const table = require("../../table/blog");

const editBlog = async (req, res) => {
  try {
    const updated = await table.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).send("ბლოგი ვერ მოიძებნა რედაქტირებისთვის");
    return res.status(200).json(updated);
  } catch (error) {
    console.error(error);
    return res.status(500).send("ბლოგის რედაქტირება ვერ მოხერხდა");
  }
};

module.exports = { editBlog };

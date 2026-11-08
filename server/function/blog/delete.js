const table = require("../../table/blog");

const deleteBlog = async (req, res) => {
  try {
    const blog = await table.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).send("ბლოგი ვერ მოიძებნა წასაშლელად");
    return res.status(200).send("ბლოგი წარმატებით წაიშალა");
  } catch (error) {
    console.error(error);
    return res.status(500).send("ბლოგის წაშლა ვერ მოხერხდა");
  }
};

module.exports = { deleteBlog };

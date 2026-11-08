const table = require("../../table/blog");

const getBlogById = async (req, res) => {
  try {
    const blog = await table.findById(req.params.id);
    if (!blog) return res.status(404).send("ბლოგი ვერ მოიძებნა");
    return res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    return res.status(500).send("ბლოგის წამოღება ვერ მოხერხდა");
  }
};

module.exports = { getBlogById };

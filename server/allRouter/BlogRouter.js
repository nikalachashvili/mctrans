const blogRouter = require("express").Router();

const { addBlog } = require("../function/blog/add.js");
const { getBlogs } = require("../function/blog/list.js");
const { getBlogById } = require("../function/blog/id.js");
const { deleteBlog } = require("../function/blog/delete.js");
const { editBlog } = require("../function/blog/edit.js");

blogRouter.get("/", getBlogs);               // ყველა ბლოგი
blogRouter.get("/:id", getBlogById);         // კონკრეტული ბლოგი
blogRouter.post("/", addBlog);               // დამატება
blogRouter.put("/:id", editBlog);            // რედაქტირება
blogRouter.delete("/:id", deleteBlog);       // წაშლა

module.exports = blogRouter;

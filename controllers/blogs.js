const router = require("express").Router();
const { Blog } = require("../models");
const { blogFinder } = require("../util/middleware");

router.get("/", async (req, res) => {
  const blogs = await Blog.findAll();

  return res.json(blogs);
});

router.post("/", async (req, res, next) => {
  const blog = await Blog.create(req.body);

  return res.status(201).json(blog);
});

router.delete("/:id", blogFinder, async (req, res) => {
  if (req.blog) {
    await req.blog.destroy();
  }

  return res.status(204).end();
});

router.put("/:id", blogFinder, async (req, res, next) => {
  if (req.blog) {
    req.blog.likes = req.body.likes;

    await req.blog.save();

    res.json(req.blog);
  } else {
    res.status(404).json({ error: "blog not found" });
  }
});

module.exports = router;

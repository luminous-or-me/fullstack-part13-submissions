const router = require("express").Router();
const { Blog } = require("../models");

router.get("/", async (req, res) => {
  const blogs = await Blog.findAll();

  return res.json(blogs);
});

router.post("/", async (req, res) => {
  try {
    const blog = await Blog.create(req.body);

    return res.status(201).json(blog);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Blog.destroy({ where: { id: req.params.id } });
    return res.status(204).end();
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;

const blogFinder = async (req, res, next) => {
  req.blog = await Blog.findByPk(req.params.id);
  next();
};

const errorHandler = (error, req, res, next) => {
  console.error(error);

  if (error.name === "SequelizeValidationError") {
    return res.status(400).json({ error: "invalid data" });
  }

  if (error.name === "SequelizeDatabaseError") {
    return res.status(400).json({ error: "invalid data" });
  }

  next(error);
};

module.exports = { blogFinder, errorHandler };

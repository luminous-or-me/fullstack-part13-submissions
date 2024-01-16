require("dotenv").config();

const { Blog } = require("./models");
const { connectToDatabase } = require("./util/db");

const main = async () => {
  try {
    await connectToDatabase();

    const blogs = await Blog.findAll();

    blogs.forEach(({ author, title, likes }) => {
      console.log(`${author}: '${title}', ${likes} likes`);
    });
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
};

main();

require("dotenv").config();

const { Sequelize, QueryTypes, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL);

class Blog extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    author: {
      type: DataTypes.TEXT,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: "blog",
  }
);

const main = async () => {
  try {
    const blogs = await Blog.findAll();

    blogs.forEach(({ author, title, likes }) => {
      console.log(`${author}: '${title}', ${likes} likes`);
    });

    sequelize.close();
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
};

main();

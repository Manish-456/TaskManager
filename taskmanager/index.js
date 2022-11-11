const connectDB = require("./Starter/routes/db/connect");
const express = require("express");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
const app = express();
const cors = require("cors");
const PORT = 5000;
const tasks = require("./Starter/routes/tasks");
const notFound = require("./Starter/middleware/not-found");
app.use(express.json());
app.use(cors());
const errorHandler = require("./Starter/middleware/error_handler");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("../public"));
app.use("/api/v1/tasks", tasks);

app.use(errorHandler);
app.use(notFound);
const start = async (url) => {
  try {
    await connectDB(url);
    app.listen(PORT, () => {
      console.log(`app listening to the port ${PORT}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};
start(process.env.SECRET_URL);

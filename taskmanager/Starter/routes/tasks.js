const express = require("express");

const router = express.Router();

const {
  getTasks,
  postTasks,
  updateTasks,
  deleteTasks,
  getSingleTasks,
} = require("../tasks-controller/backtasks");

router.route("/").get(getTasks).post(postTasks);
router.route("/:id").patch(updateTasks).delete(deleteTasks).get(getSingleTasks);

module.exports = router;

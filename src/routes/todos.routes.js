const { Router } = require("express");
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  getTodosWithCategories,
} = require("../controllers/todos.controllers");
const authMiddleware = require("../middlwares/auth.middleware");

const router = Router();

router.get("/todos", authMiddleware, getAllTasks);

router.get("/todos/:id", getTaskById);

router.get("/todos/:id/categories", getTodosWithCategories);

router.post("/todos", createTask);

router.put("/todos/:id", updateTask);

router.delete("/todos/:id", deleteTask);

module.exports = router;

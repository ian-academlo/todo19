const TodosServices = require("../services/todos.services");

const getAllTasks = async (req, res) => {
  try {
    const result = await TodosServices.getAll();
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodosServices.getById(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createTask = async (req, res) => {
  try {
    const todo = req.body;
    const result = await TodosServices.create(todo);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await TodosServices.update(id, field);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodosServices.delete(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};

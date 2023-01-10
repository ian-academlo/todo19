const UserServices = require("../services/user.services");

const getAllUsers = async (req, res) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createUser = (req, res) => {
  res.json({ message: "Creando un nuevo usuario" });
};

const updateUser = (req, res) => {
  res.json({ message: "Actualizando usuario" });
};

const deleteUser = (req, res) => {
  res.json({ message: "eliminando un usuario" });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

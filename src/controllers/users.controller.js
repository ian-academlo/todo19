const getAllUsers = (req, res) => {
  res.json({ message: "Obteniendo todos los usuarios" });
};

const getUserById = (req, res) => {
  res.json({ message: "Obteniendo un usuario por id" });
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

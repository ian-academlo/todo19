// inportabamos express
const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/init.model");
const Users = require("./models/users.model");

// crear una instancia de express
const app = express();

app.use(express.json());

const PORT = 8000;
// localhost:8000/

// probando la conexión a la base de datos
db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

initModels();

// usar el metodo sync para sincronizar la información de la base de datos
// devuelve una promesa y la resolvemos con then

db.sync({ force: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al servidor" });
});

// definir las rutas de nuestros endpoints (de ahora adelante ep)
// todas las consultar de usuarios
// localhost:8000/users --> todo para usuarios
// localhost:8000/todos --> todo para tareas

// GET a /users
app.get("/users", async (req, res) => {
  try {
    // vamos a obtener el resultado de consultar a todos los usuarios de la DB
    const result = await Users.findAll(); // SELECT * FROM users;
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

// OBtener un usuario sabiendo su id
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

// obtener un usuario por username
app.get("/users/username/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const result = await Users.findOne({ where: { username } }); // SELECT * FROM users WHERE username = iannacus
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

// Creando un usuario
app.post("/users", async (req, res) => {
  try {
    const user = req.body;
    const result = await Users.create(user);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
});

// actualizar un usuario, solo podemos cambiar password
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params; // { id: 2 }
    const field = req.body;
    const result = await Users.update(field, {
      where: { id },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// eliminar un usuario --> id
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.destroy({
      where: { id },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// vamos a terminar los modelos --> rapido
// model todos
// crear las relaciones entre los modelos
// Les voy a enseñar a insertar información desde este mismo proyecto

// vamos a estar haciendo los endpoints y consultas

// users

// vamos a insertar información en nuestra base de datos
// desde nuestro proyecto de node

// consultar la información con endpoints

// seed

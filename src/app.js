// inportabamos express
const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/init.model");
const Users = require("./models/users.model");
const userRoutes = require("./routes/users.routes");
const todosRoutes = require("./routes/todos.routes");

// crear una instancia de express
const app = express();

app.use(express.json());

const PORT = 8000;

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

initModels();

db.sync({ force: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al servidor" });
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", todosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

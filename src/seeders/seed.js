const db = require("../utils/database");
const Users = require("../models/users.model");
const Todos = require("../models/todos.models");

const users = [
  { username: "Iannacus", email: "ian@gmail.com", password: "1234" }, // id: 1
  { username: "Jhorman", email: "jhorman@gmail.com", password: "1234" }, // id: 2
  { username: "Lucero", email: "lucero@gmail.com", password: "1234" }, // id: 3
];

const todos = [
  { title: "Tarea 1", description: "shalala shalalal", userId: 1 },
  { title: "Tarea 2", description: "shalala shalalal 2", userId: 1 },
  { title: "Tarea imposible", userId: 2 },
  { title: "Dormir zzZZzZ", description: "porque node no me deja", userId: 3 },
];

// const categories = [];

// const todosCategories = [];

// create
// findOne, findAll, findByPk
// update
// destroy

db.sync({ force: true })
  .then(() => {
    console.log("Iniciando con el sembradio malicioso");
    users.forEach((user) => Users.create(user));

    setTimeout(() => {
      todos.forEach((todo) => Todos.create(todo));
    }, 100);
  })
  .catch((error) => console.log(error));

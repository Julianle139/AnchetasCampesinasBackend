var express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");
var app = express();

const userDB = "Admin";
const passDB = "admin123";
const dBase = "myFirstDatabase";

const productsRoutes = require("./routes/products");
const categoriaRoutes = require("./routes/categoria");
const usuarioRoutes = require("./routes/usuarios");
const ventasRoutes = require("./routes/ventas");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://" +
      userDB +
      ":" +
      passDB +
      "@cluster0.t6b1o.mongodb.net/" +
      dBase +
      "?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Estamos conectados ;D");
  });

app.use("/api/products", productsRoutes);
app.use("/api/categoria", categoriaRoutes);
app.use("/api/usuarios",usuarioRoutes);
app.use("/api/ventas",ventasRoutes);

module.exports = app;

//mongodb+srv://Admin:<password>@cluster0.t6b1o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

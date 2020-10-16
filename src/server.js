//Importar dependencia
const express = require("express");
const path = require("path");
const pages = require("./pages.js");
//Iniciando express
const server = express();
//Utiliza os arquivos estáticos
server
.use(express.urlencoded({ extended: true }))
  .use(express.static("public"))

  //configurar template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  //Criar Rotas da Aplicação
  .get("/", pages.index)
  .get("/orphanages", pages.orphanages)
  .get("/orphanage", pages.orphanage)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage" , pages.saveOrphanage)

//Ligar o servidor
server.listen(5500);

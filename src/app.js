//REQUERIMOPS EXPRESS
const express = require("express");

//REQUERIMOS METHOD OVERRIDE PARA SOLICITUDES QUE NO SEAN GET Y POST
const methodOverride = require('method-override');

//EJECUTAMOS EXPRESS
const app = express();

// REQUERIMOS PATH Y STATIC PARA LAS RUTAS
const { join } = require("path");
const { static } = require("express");

//SETEAMOS APP PARA Q MIRE DIRECTAMENTE LAS VISTAS EN VIEWS
app.set("view engine", "ejs");
app.set("views", join(__dirname, "./views"));

// USAMOS STATIC Y JOIN PARA QUE TODO LO QUE AGREGEMOS AL HTML SE REDIRIJA A PUBLIC AUTOMATICAMENTE, Y ASI ACORTAR LAS RUTAS
app.use(static(join(__dirname, "../public")));

// configuramos express para recibir y parsear peticiones HTTP
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// ejecutmos method override para peticiones put, delete, etc
app.use(methodOverride('_method'));

//REQUERIMOS EL ROUTEADOR PRINCIPAL
const mainRouter = require("./routes/main-router");

// MONTAMOS MAIN ROUTER
app.use("/", mainRouter);

//EXPORTAMOS APP
module.exports = app
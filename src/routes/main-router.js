// REQUERIMOS ROUTER DE EXPRESS
const { Router } = require("express");

//EJECUTAMOS ROUTER
const router = Router();

// REQUERIMOS EL MAIN CONTROLLER
const mainControllers = require("../controllers/main-controllers");

// HOME
router.get("/", mainControllers.home);

//EXPORTAMOS ROUTER
module.exports = router;
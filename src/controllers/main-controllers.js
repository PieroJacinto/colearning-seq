const db = require("../database/models")

module.exports = {
    home: async (req, res ) => {
        const usuarios = await db.Usuarios.findAll()
        console.log(JSON.stringify(usuarios,null,4))
        res.render("home")
    }
}
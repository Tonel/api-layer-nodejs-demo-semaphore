const { Router } = require("express")
const { PokemonController } = require("../controllers/pokemon")

const router = Router()

router.get("/api/v1/getCharizard", PokemonController.getCharizard)

module.exports = { router }

const { PokemonAPI } = require("../apis/pokemonAPI")

const PokemonController = {
  getCharizard: async (req, res) => {
    const charizard = await PokemonAPI.get("charizard")

    // performing other operations...

    // data transformation
    res.send({
      id: charizard.id,
      name: charizard.name,
      image: charizard.sprites.front_default,
      height: `${charizard.height * 10} cm`,
      weight: `${charizard.weight / 10} kg`,
    })
  },
}

module.exports = { PokemonController }

const { pokemonClient } = require("./configs/axiosClients")

const PokemonAPI = {
  get: async function (name) {
    const response = await pokemonClient.request({
      url: `/pokemon/${name}`,
      method: "GET",
    })

    return response.data
  },

  getPaginated: async function (limit, offset) {
    const response = await pokemonClient.request({
      url: "/pokemon/",
      method: "GET",
      params: {
        limit: limit,
        offset: offset,
      },
    })

    return response.data.results
  },

  // other APIs required by the backend application ...
}

module.exports = { PokemonAPI }

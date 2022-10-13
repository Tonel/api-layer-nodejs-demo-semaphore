const axios = require("axios")
const axiosRetry = require("axios-retry")
const { errorHandler } = require("./axiosUtils")

// defining the axios client for the PokeAPI service
const pokemonClient = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
})

// registering the custom error handler to the
// pokemonClient axios instance
pokemonClient.interceptors.response.use(undefined, (error) => {
  return errorHandler(error)
})

axiosRetry(pokemonClient, {
  retries: 3, // number of retries
  retryDelay: (retryCount) => {
    console.log(`Retry attempt: ${retryCount}`)

    // waiting 2 seconds between each retry
    return 2000
  },
  retryCondition: (error) => {
    // retrying only on 503 HTTP errors
    return error.response.status === 503
  },
})

module.exports = { pokemonClient }

/** @format */
const axios = require('axios').default

exports.handler = async function (event, context) {
  const eventBody = JSON.parse(event.body)
  const POKE_API = `https://pokeapi.co/api/v2/pokedex/${eventBody.region}`

  const { data } = await axios.get(POKE_API)

  return {
    statusCode: 200,
    body: JSON.stringify({
      pokemon: data.pokemon_entries,
    }),
  }
}

/** @format */
const axios = require('axios').default

exports.handler = async function () {
  const POKE_API = `https://pokeapi.co/api/v2/pokedex/kanto`

  const { data } = await axios.get(POKE_API)

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}

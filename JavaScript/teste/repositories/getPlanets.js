const axios = require('axios')

async function getPlanet({planetNumber}) {
  try {
    const result = await axios.get(`https://swapi.dev/api/planets/${planetNumber}/`)
    return result.data
  } catch (error) {
    return error
  }
}

module.exports = { getPlanet }

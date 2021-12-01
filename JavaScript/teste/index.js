const { getPlanet } = require('./repositories/getPlanets')


async function daniel(){
  const data = await getPlanet({ planetNumber: '2'})
  console.log(data)
}

daniel()

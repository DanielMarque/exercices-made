
const companies = ['Amazon','Google','Tesla','Alibaba']  

for (let name of companies) {
  console.log(name)
}

function chama() {
  var lista = []
  companies.forEach((company, index) => {
    console.log(companies.indexOf(company))
    lista.push(company)
  })
  return lista
}

console.log(chama())
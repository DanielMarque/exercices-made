
const num = [2, 3, 6, 8, 5, 10]

const bag = [
  {
    name: 'Banana',
    price: 2.22
  },
  {
    name: 'Pear',
    price: 2.00
  },
    {
    name: 'Pear',
    price: 2.00
  },
  {
    name: 'Apple',
    price: 1.80
  },
  {
    name: 'Grape',
    price: 1.50
  },
  {
    name: 'Avocado',
    price: 1.00
  },
]

const result = bag.filter((item) => {
  return item.name !== 'Pear' ? item: false
})

console.log(result)

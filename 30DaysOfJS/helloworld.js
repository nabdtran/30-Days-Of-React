const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]

let arr = []

const web = [
  'HTTP',
  'GraphQL',
  'Websockets',
  'gRPC',
  'API'
]
const webLength = web.length - 1
console.log(webLength)
console.log(web[0] + ', ' + web[webLength / 2] + ', ' + web[webLength])

const mixDataTypes = [
  'Asabeneh',
  250,
  true,
  { country: 'Finland', city: 'Helsinki' },
  { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
] // arr containing different data types
console.log(mixDataTypes)

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM',' Oracle', 'Amazon']
const itLength = itCompanies.length - 1
console.log(itLength)
console.log(itCompanies[0] + ', ' + itCompanies[itLength / 2] + ', ' + itCompanies[itLength])

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}

console.log(itCompanies.slice(0, itCompanies.length - 1).join(', ') + ", and " + itCompanies.slice(-1) + 'are big IT companies.')

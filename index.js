

const getRandom = (max) => {
  return Math.floor(Math.random() * max)
}

const removePersonFromList = (personName, list) => {
  return list.filter((item) => {
      return item !== personName
    })
}

const getPairs = (names) => {
  let duplicateNames = names
  const result = []
  while(duplicateNames.length > 0) {
    const firstIndex = getRandom(duplicateNames.length)
    const firstPerson = duplicateNames[firstIndex]
    
    duplicateNames = removePersonFromList(firstPerson, duplicateNames)
    
    let secondIndex = 0
    if(duplicateNames.length > 1) {
      secondIndex = getRandom(duplicateNames.length)
    }
 
    const secondPerson = duplicateNames[secondIndex]
    duplicateNames = removePersonFromList(secondPerson, duplicateNames)
    result.push([firstPerson, secondPerson])
  }
  return result
}
const names = ['@Raph', '@ray', '@Andrew Han', '@Simon Cho', '@Matt Catellier', '@prashant', '@Max Wong', '@Camila Rivera']
const pairs = getPairs(names)

console.log('Pairs for this week:')
pairs.forEach((pair) => {
  console.log(`${pair[0]}, ${pair[1]}`)
})

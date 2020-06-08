


const commonYears = rangesArr => {
  // [[1910, 1950], [1900, 1951], [1945, 2000]]

  let births = [], deaths = []

  rangesArr.forEach(range => {
    births.push(range[0])
    deaths.push(range[1])
  })

  let latestBirth = births.sort().pop()
  let earliestDeath = deaths.sort().shift()
  let numberOfYears = earliestDeath - latestBirth

  let finalArray = []
  
  for(let i = 0; i <= numberOfYears; i++){
    finalArray.push(latestBirth + i)
  }

log(finalArray)


}

commonYears([[1901,1903],[1902,1904],[1903,1905],[1899,1905]])

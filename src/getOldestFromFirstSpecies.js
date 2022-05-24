const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui

  const employee = data.employees.find((person) => person.id === id).responsibleFor;
  const [result] = data.species.map((element) => {
    if (element.id === employee[0]) {
      return element.residents.sort();
    }
    return undefined;
  }).filter((element) => element !== undefined);
  const value = Object.values(result).map((element) => element).sort((a, b) => a.age - b.age);
  return Object.values(value[value.length - 1]);
}

module.exports = getOldestFromFirstSpecies;

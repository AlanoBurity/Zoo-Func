const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const semInput = species.reduce((acc, ell) => {
      acc[ell.name] = ell.residents.length;
      return (acc);
    }, {});
    return semInput;
  }
  const { specie, sex } = animal;

  if (specie && sex) {
    return species
      .find(({ name }) => name === specie).residents
      .filter(({ sex: sexAnimal }) => sexAnimal === sex).length;
  }

  if (specie) {
    return species.find(({ name }) => name === specie).residents.length;
  }
}
console.log(countAnimals({ species: 'lions' }));

module.exports = countAnimals;

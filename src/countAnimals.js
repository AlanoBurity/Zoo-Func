const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const semInput = species.reduce((acc, ell) => {
      acc[ell.name] = ell.residents.length;
      return (acc);
    }, {});
    return semInput;
  }
/*   const comInput = species.find((ell2) => {
    if (Object.values(animal).includes(ell2.name)) {
      return ell2;
    }
  });
  return comInput.residents.length; */
}
console.log(countAnimals({ species: 'lions' }));

module.exports = countAnimals;

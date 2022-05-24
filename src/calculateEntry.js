const { prices } = require('../data/zoo_data');

function countEntrants(visitantesFaixaEtaria) {
  // seu código aqui
  return {
    senior: visitantesFaixaEtaria.filter(({ age }) => age >= 50).length,
    adult: visitantesFaixaEtaria.filter(({ age }) => age >= 18 && age < 50).length,
    child: visitantesFaixaEtaria.filter(({ age }) => age < 18).length,
  };
}

function calculateEntry(visitantes) {
  // seu código aqui
  if (visitantes === undefined || Object.keys(visitantes).length === 0) {
    return 0;
  }
  const { adult: precoA, senior: precoS, child: precoC } = prices;
  const { adult, senior, child } = countEntrants(visitantes);
  return (child * precoC) + (senior * precoS) + (adult * precoA);
}

module.exports = { calculateEntry, countEntrants };

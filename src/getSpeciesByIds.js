const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  return species.filter((elemento) => ids.includes(elemento.id));
}
module.exports = getSpeciesByIds;

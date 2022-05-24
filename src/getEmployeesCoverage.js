const { employees, species } = require('../data/zoo_data');

const colaboradores = (name) => employees.filter((ell) =>
  ell.firstName === name || ell.lastName === name || ell.id === name);
const nomeAnimal = (animalId) => animalId.map((id) =>
  species.find((ell) => ell.id === id).name);
const animalLocalizacao = (animalId) => animalId.map((id) =>
  species.find((ell) => ell.id === id).location);
const infoColaboradores = (param) => {
  const colaborador = colaboradores(Object.values(param)[0])[0];
  return {
    id: colaborador.id,
    fullName: `${colaborador.firstName} ${colaborador.lastName}`,
    species: nomeAnimal(colaborador.responsibleFor),
    locations: animalLocalizacao(colaborador.responsibleFor),
  };
};

const allInfoArr = (obj) => obj.map((ell) => ({
  id: ell.id,
  fullName: `${ell.firstName} ${ell.lastName}`,
  species: nomeAnimal(ell.responsibleFor),
  locations: animalLocalizacao(ell.responsibleFor),
}));

const getEmployeesCoverage = (param) => {
  if (!param) {
    return allInfoArr(employees);
  }
  if (colaboradores(Object.values(param)[0]).length < 1) {
    throw new Error('Informações inválidas');
  }
  return infoColaboradores(param);
};
console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;

const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.filter((funcionarios) => funcionarios.id === id)
    .every((elemento) => {
      if (elemento.managers.length === 0 || elemento.managers.length === 1) {
        return true;
      } return false;
    });
}
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === true) {
    return employees
      .filter((empregados) => (empregados.managers.includes(managerId)))
      .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };

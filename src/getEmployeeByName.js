const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((elemento) =>
    elemento.firstName === employeeName || elemento.lastName === employeeName);
}

module.exports = getEmployeeByName;

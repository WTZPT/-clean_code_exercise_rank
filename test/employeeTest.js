const test = require('ava');
const {
  createEmployee
} = require('../src/employee')

test('employee case 1, should Gogo is engineer when createEmployee given Gogo and engineer ', t => {
  const employee = createEmployee('Gogo', 'engineer');
  t.is(employee.toString(), 'Gogo (engineer)')
})

test('employee case 2, should return Janny is manager when createEmployee given Janny and manager ', t => {
  const employee = createEmployee('Janny', 'manager');
  t.is(employee.toString(), 'Janny (manager)')
})

test('employee case 3, should return tong is salesman when createEmployee given tony and salesman ', t => {
  const employee = createEmployee('Tony', 'salesman');
  t.is(employee.toString(), 'Tony (salesman)')
})

test('employee case 4, should throw exception when createEmployee given tony and test ', t => {
  t.throws(() => createEmployee('Tony', 'test'))
})
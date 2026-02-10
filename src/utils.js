function formatName(firstName, lastName) {
  const fullName = firstName + ' ' + lastName;
  return fullName;
}

function add(a, b) {
  const result = a + b;
  return result;
}

const PI = 3.14;

function greet(name) {
  return 'Hello, ' + name;
}

module.exports = { formatName, add, PI, greet };

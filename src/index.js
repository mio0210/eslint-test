const greeting = 'Hello, World!';

function checkValue(value) {
  if (value === null) {
    return false;
  }

  if (value === 0) {
    return;
  }

  const result = 'success';
  return result;
}

checkValue(greeting);

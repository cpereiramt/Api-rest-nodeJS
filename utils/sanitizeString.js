sanitizeStringFunction = (str) => {
  console.log(str, 'sanitizeStringFunction');
  const withoutAccents = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const returnedString = withoutAccents.toUpperCase();
  return returnedString;
};

module.exports = sanitizeStringFunction;

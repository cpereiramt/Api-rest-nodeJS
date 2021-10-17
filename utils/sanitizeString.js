sanitizeStringFunction = (str) => {
  const withoutAccents = str.normalize("NFD");
  const returnedString = withoutAccents.toUpperCase();
  return returnedString;
};

module.exports = sanitizeStringFunction;

module.exports = (arrayAsAtring) => {
  return arrayAsAtring && arrayAsAtring.split(',').map((tech) => tech.trim());
};

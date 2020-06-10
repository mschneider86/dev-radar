module.exports = (arrayAsAtring) => {
  return arrayAsAtring.split(",").map((tech) => tech.trim());
};

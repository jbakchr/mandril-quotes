const quotes = require("./lib/quotes");
const warnings = require("./lib/warnings.json");

const getRandomIndex = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

const spisIld = () => {
  const { character, quote } = quotes[getRandomIndex(quotes)];
  console.log(`${character}: "${quote}"`);
};

const getWarning = () => {
  const { season, episode, warning } = warnings[getRandomIndex(warnings)];
  console.log(`S${season}:E${episode}: ${warning}`);
};

module.exports = {
  spisIld,
  getWarning,
};

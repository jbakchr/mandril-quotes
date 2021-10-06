const quotes = require("./lib/quotes");

const spisIld = () => {
  const index = Math.floor(Math.random() * quotes.length);
  const { character, quote } = quotes[index];
  console.log(`${character}: "${quote}"`);
};

module.exports = {
  spisIld,
};

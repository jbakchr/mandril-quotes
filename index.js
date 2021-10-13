const chalk = require("chalk");

const quotes = require("./lib/quotes");
const warnings = require("./lib/warnings.json");
const programOverviews = require("./lib/program-overviews.json");

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

const enProgramOversigt = () => {
  const { season, episode, program_overview } =
    programOverviews[getRandomIndex(programOverviews)];
  console.log(chalk.underline.bold(`Programoversigt (S${season}:E${episode})`));
  program_overview.forEach(({ time, title }) => {
    console.log(`${time}  ${title}`);
  });
};

module.exports = {
  spisIld,
  getWarning,
  enProgramOversigt,
};

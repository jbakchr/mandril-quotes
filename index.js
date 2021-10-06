import { quotes } from "./lib/quotes.js";

const spisIld = () => {
  const index = Math.floor(Math.random() * quotes.length);
  const { character, quote } = quotes[index];
  console.log(`${character}: "${quote}"`);
};

export { spisIld };

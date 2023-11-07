const quotes = require("./quotes.json");

module.exports = {
  getRandomQuote: function () {
    return quotes[Math.floor(Math.random() * quotes.length)].quote;
  },
};

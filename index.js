const http = require("http");
const fs = require("fs");

const template = (quote) => `<div><h1>${quote.rus}</h1><p>${quote.author}</p></div>`;

// const server = http.createServer(); // создаём сервер
const server = http.createServer((req, res) => {
  const Quotes = fs.readFileSync("./converted.json", { encoding: "utf8" });
  const ParsedQuotes = JSON.parse(Quotes);
  const quoteIndex = Math.floor(Math.random() * ParsedQuotes.length);
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf8",
  });
  // в методе end тоже можно передать данные
  res.end(template(ParsedQuotes[quoteIndex]), "utf8");
});
server.listen(3000); // будем принимать сообщения с 3000 порта

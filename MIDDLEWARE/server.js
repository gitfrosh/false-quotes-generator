const polka = require("polka");
const fetch = require("node-fetch");
var cors = require("cors");
var fs = require("fs");

polka()
  .use(cors())
  .get("/api/quote", async (req, res) => {
    var urly = "https://thesimpsonsquoteapi.glitch.me/quotes";
    let options = {
      method: "GET"
    };
    try {
      let response = await fetch(urly, options);
      let data = await response.json();
      const quote = data[0].quote;
      res.end(JSON.stringify(quote));
    } catch (e) {
      console.error(e);
    }
  })
  .get("/api/celebrity", async (req, res) => {
    try {
      var content = fs.readFileSync("data.json", "utf8");
      var parsedContent = JSON.parse(content);;
      var randCel =
        parsedContent[Math.floor(Math.random() * parsedContent.length)];
      res.end(JSON.stringify(randCel));
    } catch (e) {
      console.error(e);
    }
  })
  .listen(3333, err => {
    if (err) throw err;
    console.log(`> Running on localhost:3333`);
  });

const polka = require("polka");
const fetch = require("node-fetch");
var cors = require("cors");
var fs = require("fs");
polka()
  .use(cors())
  .get("/quote", async (req, res) => {
    console.log(`~> Hello, ${req.hello}`);
    var urly = "https://thesimpsonsquoteapi.glitch.me/quotes";
    let options = {
      method: "GET" // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, cors, *same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      // headers: {
      //   "X-RapidAPI-Key": "fd4d1bf937msh6eaaf0ce69c2eb0p14c643jsn14e68da7d095",
      //   "X-RapidAPI-Host": "andruxnet-random-famous-quotes.p.rapidapi.com",
      //   "Content-Type": "application/x-www-form-urlencoded",
      // },
      // redirect: "follow", // manual, *follow, error
      // referrer: "no-referrer", // no-referrer, *client
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
    };
    try {
      let response = await fetch(urly, options);
      let data = await response.json();
      const quote = data[0].quote;
      console.log(quote);
      res.end(JSON.stringify(quote));
    } catch (e) {
      console.log(e);
    }

    // return fetch(urly) // <!-- note that we're *returning* the promise this time
    //   .then(res => res.json())
    //   console.log(res)
    //   .then(data => {
    //     console.log(data);
    //     res.end({quote : data});
    //   });
  })
  .get("/celebrity", async (req, res) => {
    try {
      var content = fs.readFileSync("data.json", "utf8");
      var parsedContent = JSON.parse(content)
      console.log(parsedContent);
      var randCel = parsedContent[Math.floor(Math.random() * parsedContent.length)];
      res.end(JSON.stringify(randCel));
    } catch (e) {
      console.log(e);
    }
  })
  .listen(3333, err => {
    if (err) throw err;
    console.log(`> Running on localhost:3333`);
  });

<script>
  let count = 0;
  let quote = "";
  let celebrity = "";
  let loading = false;

  async function getQuote() {
    count += 1;
    var urly = "http://localhost:3333/quote";
    let response = await fetch(urly);
    let data = await response.json();
    console.log(data);
    quote = data;
    // return { quote: data }; // <!-- and we're returning the result, rather than this.set(...)
  }
  async function getCelebrity() {
    var urly = "http://localhost:3333/celebrity";
    let response = await fetch(urly);
    let data = await response.json();
    console.log(data);
    celebrity = data;
    // return { celebrity: response };
  }
  async function handleClick(event) {
    loading = true;
    await getQuote();
    await getCelebrity();
    loading = false;
  }

  function preload({ params, query }) {
    // nothing todo
  }
</script>

<style>
  h1,
  figure,
  div,
  p {
    text-align: center;
    margin: 0 auto;
  }

  .caption {
    margin: 0 auto;
    padding-top: 2.5em;
    width: 70%;
  }

  .quote {
    width: 70%;
    font-size: 1.8em;
    font-family: "Libre Baskerville", Georgia, serif;
    font-style: italic;
  }

  .celebrity {
    width: 70%;
    text-align: right !important;
  }

  .btnPush:hover {
    margin-top: 15px;
    margin-bottom: 5px;
  }

  .btnBlueGreen.btnPush:hover {
    box-shadow: 0px 0px 0px 0px #007144;
  }

  a,
  a:visited {
    text-decoration: none;
    color: #00ae68;
  }

  a.button {
    /* display: block;
    position: relative; 
    float: left;*/
    width: 120px;
    padding: 10px 50px 10px 50px;
    font-weight: 600;
    text-align: center;
    line-height: 50px;
    color: #fff;
    border-radius: 5px;
    transition: all 0.2s;
  }

  .btnBlueGreen.btnPush {
    box-shadow: 0px 5px 0px 0px #007144;
  }

  .btnBlueGreen {
    background: #00ae68;
  }

  .btnBlueGreen.btnPush:hover {
    box-shadow: 0px 0px 0px 0px #007144;
  }

  .btnPush:hover {
    margin-top: 15px;
    margin-bottom: 5px;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  .quote-img {
    width: 100%;
    max-width: 80px;
    margin: 0 0 1em 0;
  }

  .load-img {
    width: 100%;
    max-width: 30px;
    margin: 0 0 1em 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>
<div id="wrapper">
  <div id="content">
    <div id="center">
      <div class="caption">
        <h1>false quotes generator</h1>
      </div>


      <div>
        <figure>
          <img class="quote-img" alt="Quote" src="quote.png" />
          {#if loading}
            <figcaption>
              <p>
                <img class="load-img" alt="Loading" src="ajax-loader.gif" />
              </p>
            </figcaption>
          {/if}
          {#if !loading}
            <figcaption>
              <p class="quote">{quote}</p>
              <p class="celebrity">- {celebrity}</p>
            </figcaption>
          {/if}
        </figure>
        <span>
          <a
            on:click={handleClick}
            href=""
            title="Button push blue/green"
            class="button btnPush btnBlueGreen">
            GO!
          </a>
        </span>
      </div>
    </div>
  </div>
  <footer>
    Made with ♥ and
    <a href="http://svelte.dev" target="_blank">Svelte.js</a>
    by
    <a href="https://rike.dev" target="_blank">Rike</a>
    in 2019.
  </footer>
</div>

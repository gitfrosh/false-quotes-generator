<script>
  let count = 0;
  let quote = "";

  async function getQuote() {
    // count += 1;
    var urly = "http://localhost:3333/quote";
    let response = await fetch(urly);
    let data = await response.json();
    console.log(data);
    return { quote: response }; // <!-- and we're returning the result, rather than this.set(...)
  }
  async function getCelebrity() {
    var urly = "http://localhost:3333/celebrity";
    let response = await fetch(urly);
    let data = await response.json();
    console.log(data);
    return { celebrity: response };
  }
  async function handleClick(event) {
    getQuote();
    getCelebrity();
  }

  function preload({ params, query }) {
    // nothing todo
  }
</script>

<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  .caption {
    margin: 0 auto;
    padding-top: 200px;
    width: 70%;
  }

  .quote {
    font-family: 'Libre Baskerville', Georgia, serif;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
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
<div class="caption">
  <h1>false quotes generator</h1>
</div>

<div>
  <figure>
    <img alt="Borat" src="great-success.png" />
    <figcaption>HIGH FIVE!</figcaption>
  </figure>

  <p>
    <strong>
      Try editing this file (routes/index.html) to test live reloading.
    </strong>

    <button on:click={handleClick}>count: {count}</button>
  </p>
</div>

<p class="quote">
dsfdsfsf
</p>

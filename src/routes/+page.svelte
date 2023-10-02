<script>
  import { activeStore } from "../components/cartStore";

  $: store = $activeStore;
  activeStore.subscribe((value) => {
    store = value;
  });
  console.log("activeStore", { store });

  export let data;

  // data.subscribe((value) => {
  //   items = value;
  // });

  // console.log("data", { data });
</script>

<div class="main">
  <div class="stores">
    <div class="cards">
      {#if store === "all"}
        {#each data.summaries as { slug, img, name }}
          <div class="card">
            <a href="/{slug}">
              <!-- <img src="../src/img/stores/{name}.png" alt="" /> -->
              <img src={img} alt="" />
              <h2>{name}</h2>
            </a>
          </div>
        {/each}
      {:else}
        {#each data.summaries as { slug, img, name }}
          {#if name === store}
            <div class="card">
              <a href="/{slug}">
                <!-- <img src="../src/img/stores/{name}.png" alt="" /> -->
                <img src={img} alt="" />
                <h2>{name}</h2>
              </a>
            </div>
          {/if}
        {/each}
      {/if}
    </div>
  </div>
</div>

<!-- {JSON.stringify(cart)} -->

<style>
  .container {
    max-width: 96vw;
    margin: 0 auto;
    margin-bottom: 0;
  }
  .main {
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
  }
  .card {
    /* min-height: 100%; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 320px;
    background: #fff;
    font-family: "Roboto", sans-serif;
    padding: 16px;
    box-shadow: 0 9px 17px -6px rgba(0, 0, 0, 0.2);
    margin: 5px;
    border-radius: 0.5em;
    transition: all 400ms ease;

    margin: 0 auto;
  }
  .card a {
    text-align: center;
    color: inherit;
    text-decoration: none;
  }
  .card a:hover {
    text-decoration: underline;
  }
</style>

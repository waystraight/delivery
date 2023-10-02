<script>
  // import { products, cart, adress } from "../components/cartStore";
  import CarLenght from "../components/СarLength.svelte";
  import Products from "../components/Products.svelte";
  import Cart from "../components/Cart.svelte";
  import Adress from "../components/Adress.svelte";
</script>

<div class="container">
  <nav class="navigation">
    <ul class="nav-list">
      <li class="nav-item">Магазин</li>
      <span class="line" />
      <li class="nav-item">Кошик</li>
    </ul>
  </nav>

  <CarLenght />
  <Products />
  <Cart />
  <Adress />
</div>

<!-- {JSON.stringify(cart)} -->

<style>
  .container {
    max-width: 80vw;
    margin: 0 auto;
    margin-bottom: 0;
  }
  .nav-list {
    display: flex;
    /* align-items: center; */
  }
  /* .line {
    margin: 0 5px;
    color: #333;
  } */

  .line {
    content: "";
    height: 20px;
    width: 1px;
    background-color: #000;
  }
  ul {
    list-style: none;
  }
  li {
    margin: 0 10px;
  }
</style>

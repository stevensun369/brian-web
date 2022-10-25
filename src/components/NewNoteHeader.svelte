<script>

  import { pop, push } from "svelte-spa-router"
  
  export let onClick

</script>

<div id="container">
  <div id="back" on:click={() => pop()}>
    <img src="/img/arrow-left.png" alt="">
  </div>

  <div id="new" on:click={onClick}>
    <span>add</span>
  </div>
</div>
<div id="spacing"></div>

<style scoped>
  #container {
    width: var(--container);
    height: 60px;
    position: fixed;
    top: 0;
  }

  #spacing {
    height: 70px;
  }

  #back {
    height: 100%;
    width: 70px;
    position: relative;
    float: left;
  }

  #back img {
    height: 50%;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  #new {
    width: 70px;
    height: 40px;
    margin-top: 10px;
    margin-right: 10px;
    background: var(--magenta);
    border-radius: 300px;
    float: right;
    position: relative;
  }

  #new span {
    font-family: var(--sans-serif);
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
</style>
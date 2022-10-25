<script>
  import { push } from 'svelte-spa-router'
</script>

<div id="container">
  <div id="new">
    <span on:click={() => {push('/new')}}>
      new note
    </span>
  </div>
</div>

<style scoped>
  #container {
    width: var(--container);
    height: 65px;
    position: fixed;
    bottom: 0;
    /* background: black; */
    z-index: 5;
  }

  #new {
    width: 90%;
    height: 45px;
    background: var(--magenta);
    margin-left: 5%;
    margin-top: 10px;
    border-radius: 300px;
    position: relative;
    z-index: 4;
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
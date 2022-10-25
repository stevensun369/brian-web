<script>

  import { push } from "svelte-spa-router"

</script>

<div id="container">
  <div id="icon">
    <span>brian</span>
  </div>

  <div id="profile" on:click={() => {push('/profile')}}>
    <img src="/img/profile.png" alt="">
  </div>
</div>
<div id="spacing"></div>

<style scoped>
  #container {
    width: var(--container);
    /* margin-left: calc(calc(100% - var(--container)) / 2); */
    height: 50px;
    position: fixed;
    top: 0;
  }

  #spacing {
    height: 60px;
  }

  #icon {
    height: 100%;
    width: 30%;
    position: relative;
    float: left;
  }

  #icon span {
    font-family: monospace;
    font-size: 2em;
    color: var(--magenta);

    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  #profile {
    width: 70px;
    height: 50px;
    float: right;
    position: relative;
  }

  #profile img {
    height: 65%;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
</style>
<script>

  export let note
  export let onClick

</script>

<div id="container">
  <div id="completed" on:click={onClick}>
    {#if note.completed}
      <img src="/img/checked.png" alt="">
    {:else}
      <img src="/img/not-checked.png" alt="">
    {/if}
  </div>

  <div id="content">
    <span>
      {note.content}
    </span>
  </div>
</div>

<style scoped>

  #container {
    width: 90%;
    margin: auto;
    height: auto;
    padding: 15px 0;
    margin-top: 5px;
    box-sizing: border-box;
  }

  #completed {
    box-sizing: border-box;
    margin-left: 5px;
    float: left;
  }

  #completed img {
    height: 20px;
    width: 20px;
  }

  #content {
    width: 85%;
    min-height: 20px;
    margin-left: 15%;
    text-align: justify;
    font-family: var(--sans-serif);
  }
  
</style>
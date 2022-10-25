<script>
  export let text
</script>

<div id="container">
  <textarea 
    bind:value={$text} 
    name="new"
    cols="30" 
    rows="10" 
    placeholder="just write whatever you're thinking about :)"
  ></textarea>

  {$text}
</div>

<style scoped>
  #container {
    width: 100%;
    height: 50%;
    position: relative;
  }

  textarea {
    width: 90%;
    margin-left: 5%;
    background: black;
    color: white;

    border-radius: 13px;
    border: 1px solid var(--magenta);
    outline: none;
    
    padding-left: 10px;
    padding-top: 10px;
    box-sizing: border-box;
  }

  textarea::placeholder {
    color: gray;
  }

</style>
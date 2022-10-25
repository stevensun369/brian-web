<script>

  export let selDate
  import { get } from 'svelte/store'

  let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

  function getCardinal(n) {
    if (n % 10 === 1) {
      return 'st'
    } else if (n % 10 === 2) {
      return 'nd'
    } else if (n % 10 === 3) {
      return 'rd'
    } else {
      return 'th'
    }
  }

  function prevDay() {
    let newSelDate = new Date($selDate)
    newSelDate.setDate(newSelDate.getDate() - 1)
    selDate.set(newSelDate)
  }

  function nextDay() {
    let newSelDate = new Date($selDate)
    newSelDate.setDate(newSelDate.getDate() + 1)
    selDate.set(newSelDate)
  }
</script>

<!-- {days[$selDate.getDay()]} - 
{$selDate.getDate() + getCardinal($selDate.getDate())}  -->

<div id="slider">
  <div class="button" style="float: left; margin-left: 7px;" on:click={prevDay}>
    <img src="/img/arrow-left.png" alt="">
  </div>
  <span class="title">
    {days[$selDate.getDay()]} - 
    {$selDate.getDate() + getCardinal($selDate.getDate())} 
    {months[$selDate.getMonth()]}
  </span>
  <div class="button" style="float: right; margin-right: 7px;" on:click={nextDay}>
    <img src="/img/arrow-right.png" alt="">
  </div>
</div>

<style scoped>
  #slider {
    width: 100%;
    height: 45px;
    position: relative;
  }

  .button {
    height: 45px;
    width: 45px;
    position: relative;
  }

  .button img {
    height: 60%;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .title {
    font-family: var(--sans-serif);

    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
</style>
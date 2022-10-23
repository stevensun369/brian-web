<script>
  
  import { signup } from '../../actions/user'

  let firstName
  let lastName
  let email
  let password
  let checkPassword

  let active = true

  $: {
    active = password === checkPassword
  }

</script>

<main>
  <input bind:value={firstName} class="input" type="text" placeholder="first name"><br>
  <input bind:value={lastName} class="input" type="text" placeholder="last name"><br>
  <input bind:value={email} class="input" type="text" placeholder="email"><br>
  <input bind:value={password} class="input" type="password" placeholder="password"><br>
  <input bind:value={checkPassword} class="input" type="password" placeholder="retype password"><br>


  {#if active}
    <input class="submit-active" type="submit" on:click={async () => {
      await signup(firstName, lastName, email, password);
    }}>
  {:else}
    <input class="submit-inactive" type="submit" on:click={async () => {
      await signup(firstName, lastName, email, password);
    }}>
  {/if}
</main>
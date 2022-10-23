<script>

  import { newNote } from '../../actions/notes'
  let text
  
</script>

<textarea bind:value={text} name="new" id="" cols="30" rows="10" placeholder="just write whatever you're thinking about :)"></textarea>

<input type="submit" on:click={async () => {
  await newNote(text)
}}>
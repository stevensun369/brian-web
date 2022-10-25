<script>
  import { push } from 'svelte-spa-router'
  import { writable } from 'svelte/store'
  import { newNote } from '../../actions/notes'
  import NewNoteHeader from '../../components/NewNoteHeader.svelte'
  import NewText from '../../components/NewText.svelte'

  let text = writable('')
  
</script>

<NewNoteHeader onClick={async () => {
  await newNote($text)
  push('/home')
}} />

<NewText {text} />
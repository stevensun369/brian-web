<script>
	import { get } from 'svelte/store'

	import { getNotes, toggleNote } from '../actions/notes'
  import { currDay, currMonth, notes } from '../stores'

	console.log(get(currDay))
	console.log(get(currMonth))


</script>

{#await getNotes($currMonth, $currDay) then data}
	{#each $notes[$currMonth + '.' + $currDay] as note}
		<span on:click={() => {
			toggleNote(note.key)
		}}>{note.completed}</span> - {note.key}
	{/each}
{/await}
<script>


	import { getNotes, toggleNote } from '../actions/notes'
	import Header from '../components/Header.svelte'
  import DaySlider from '../components/DaySlider.svelte'
  import NewNote from '../components/NewNote.svelte'
  import Note from '../components/Note.svelte'

  import { notes, selDay, selMonth, selDate } from '../stores'

	$: {
		selDay.set($selDate.getDate())
		selMonth.set($selDate.getMonth() + 1)
	}

</script>

<Header />

<DaySlider {selDate} />

{#await getNotes($selMonth, $selDay) then data}
	{#if $notes[$selMonth + '.' + $selDay].length === 0}
		<div id="no-notes">
			<span>
				no notes for this day
			</span>
		</div>
	{/if}
	{#each $notes[$selMonth + '.' + $selDay] as note}
		<Note {note} onClick={() => {
			toggleNote(note.key)
		}} />
	{/each}
{/await}

<NewNote />

<style scoped>
	#no-notes {
		position: relative;
		width: 100%;
		height: 20px;

		margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
	}

	#no-notes span {
		font-family: var(--sans-serif);
		margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
	}
</style>
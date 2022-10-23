import { writable, get } from "svelte/store"

export let info = writable({})
export let token = writable({})

let d = new Date()

export let currDay = writable(d.getDate())
export let currMonth = writable(d.getMonth() + 1)

export let time = writable(d.getHours() + d.getMinutes() + d.getSeconds())

export let selDay = writable(get(currDay))
export let selMonth = writable(get(currMonth))

export let notes = writable({})

// errors & warnings
export let errorMessage = writable('')
export let warningMessage = writable('')

import { writable, get } from "svelte/store"

export let info = writable({})
export let token = writable({})

let d = new Date()

export let selDate = writable(d)

export let selDay = writable(d.getDate())
export let selMonth = writable(d.getMonth() + 1)

export let time = writable(d.getHours() + d.getMinutes() + d.getSeconds())

export let notes = writable({})

// errors & warnings
export let errorMessage = writable('')
export let warningMessage = writable('')

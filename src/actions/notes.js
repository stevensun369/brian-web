import axios from 'axios'
import { apiURL, tokenConfig } from '../axiosConfig'
import { token, errorMessage, notes, selMonth, selDay } from '../stores'
import { get } from 'svelte/store'

export async function getNotes(dateMonth, dateDay) {
  try {
    const {data} = await axios.get(
      `${apiURL}/v1/notes?dateMonth=${dateMonth}&dateDay=${dateDay}`,
      tokenConfig(get(token))
    )

    let notesValue = get(notes)
    notesValue[`${dateMonth}.${dateDay}`] = data
    notes.set(notesValue)

    return data
  } catch (error) {
    errorMessage.set(error.response.data.message)
  }
}

export async function toggleNote(key) {
  try {
    const {data} = await axios.put(
      `${apiURL}/v1/notes/toggle?key=${key}`,
      {},
      tokenConfig(get(token))
    )
    let notesIndex = data.dateMonth + '.' + data.dateDay

    let notesValue = get(notes)

    // finding the note
    for (let index in notesValue[notesIndex]) {
      if (notesValue[notesIndex][index].key === key) {
        notesValue[notesIndex][index].completed = data.completed
      }
    }

    notes.set(notesValue)
  } catch (error) {
    errorMessage.set(error.response.data.message)
  }
}

export async function newNote(content) {
  try {
    let dateMonth = get(selMonth)
    let dateDay = get(selDay)

    let d = new Date()
    let hours = ('0' + d.getHours()).slice(-2)
    let minutes = ('0' + d.getMinutes()).slice(-2)
    let seconds = ('0' + d.getSeconds()).slice(-2)

    let time = hours + minutes + seconds
    console.log(time)

    const {data} = await axios.post(
      `${apiURL}/v1/notes/new`,
      {content, dateMonth, dateDay, time},
      tokenConfig(get(token))
    )

    console.log(data)
  } catch (error) {
    errorMessage.set(error.response.data.message)
  }
}
import axios from 'axios'
import { push } from 'svelte-spa-router'
import { apiURL, config } from '../axiosConfig'
import { errorMessage } from '../stores'

export async function signup(firstName, lastName, email, password) {
  try {
    const {data} = await axios.post(
      `${apiURL}/v1/user/signup`,
      {firstName, lastName, email, password},
      config
    )

    localStorage.setItem('userInfo', JSON.stringify(data.user))
    localStorage.setItem('userToken', data.token)

    push('/home')
  } catch (error) {
    errorMessage.set(error.response.data.message)
  }
}

export async function login( email, password) {
  try {
    const {data} = await axios.post(
      `${apiURL}/v1/user/login`,
      {email, password},
      config
    )

    localStorage.setItem('userInfo', JSON.stringify(data.user))
    localStorage.setItem('userToken', data.token)

    push('/home')
  } catch (error) {
    errorMessage.set(error.response.data.message)
  }
}
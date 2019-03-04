import axios from 'axios'

const env = process.env

export async function getAllPartners() {

  const request = axios.get(`${env.VUE_APP_API_ENDPOINT}/partners`)
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => console.log(err))
    return request
}

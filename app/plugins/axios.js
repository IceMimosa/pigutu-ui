import * as axios from 'axios'
const server = process.env.SERVER
const port = process.env.PORT

export default ({ app, store, redirect }) => {
  // The server-side needs a full url to works
  axios.defaults.baseURL = `http://${server}:${port}`
}

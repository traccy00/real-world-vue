import axios from 'axios'

//apiClient is Single Axios instance for our app
const apiClient = axios.create({
    // base URL for all calls to use
    baseURL: 'https://my-json-server.typicode.com/traccy00/fake-server',
    withCredentials: false,
    // for authen and config for communicating with server
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    //method
    getEvents() {
        // added onto baseURL in line 6: eg:https://my-json-server.typicode.com/traccy00/fake-server/events
        return apiClient.get('/events')
    }
}
import axios from "axios"

const KEY = 'AIzaSyBQY6NpIzhej1qzT5_TEdll6q9VXhGLKoY'

//we are making pre configured instance of axios
//that already has a base url and some default params loaded into it

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    //options object called params, contains diff query 
    //string params we want added on to request
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})
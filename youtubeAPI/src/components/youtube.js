import axios from 'axios';  

const KEY = "AIzaSyCsK0e0C-YXvim12e5B-t9IJ3F6KLaZ61I";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: "snippet",
        maxResults:5,
        key:KEY

    }
});
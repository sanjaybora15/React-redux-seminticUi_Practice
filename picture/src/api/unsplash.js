import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 41d46225d571eaf038ef9de4a666a459a6ff9a1e19b433390fdd98794693621d'
  }
});

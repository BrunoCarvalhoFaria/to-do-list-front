import axios from 'axios';

const api = axios.create({
  baseURL:"https://todolist-brunofaria.herokuapp.com",  
});

export default api;
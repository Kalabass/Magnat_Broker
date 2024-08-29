import axios from 'axios';
//TODO: добавить переменную окружения
const instance = axios.create({
  baseURL: 'http://localhost:5252/',
});

export default instance;

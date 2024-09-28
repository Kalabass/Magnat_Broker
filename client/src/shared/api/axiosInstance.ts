import axios from 'axios'
import { getTokenFromLocalStorage } from '../lib/localStorage/tokenStorage'

const instance = axios.create({
	baseURL: 'http://localhost:5252/',
	headers: {
		Authorization: 'Bearer ' + getTokenFromLocalStorage(),
	},
})

instance.interceptors.request.use(
	config => {
		const token = getTokenFromLocalStorage()
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

export default instance

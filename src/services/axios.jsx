import axios from "axios";

const api = axios.create({
	baseURL: 'https://projeto-m4.herokuapp.com/'
	
})

export default api
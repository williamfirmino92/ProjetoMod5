import axios from "axios";

const api = axios.create({
	baseURL: 'https://oficina-mecanica-resilia.herokuapp.com'
})

export default api
// Cần chuẩn bị ở nhà trước
import axios from "axios"

const PORT = 9999
const BASE_URL = `http://localhost:${PORT}`

export const instance = axios.create({
    baseURL: BASE_URL
})
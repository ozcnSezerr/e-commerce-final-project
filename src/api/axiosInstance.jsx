// src/api/axiosInstance.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  timeout: 5000, // 5 saniye içinde cevap gelmezse iptal et
});

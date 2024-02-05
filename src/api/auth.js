import axios from "../config/axios";

export const register = (user) => axios.post("auth/register", user);
export const login = (Credential) => axios.post("/auth/login", Credential);

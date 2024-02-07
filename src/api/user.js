import axios from "../config/axios";

export const updateUser = (user) => axios.patch("/users", user);

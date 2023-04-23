import axios from "axios";


//--------------------------------------Admin---------------------------------------------------------
const urlAdmin = "https://elitmus-backend-9rw7.onrender.com/admin";

export const fetchAdmin = () => axios.get(urlAdmin);

export const createAdmin = (newAdmin) => axios.post(urlAdmin, newAdmin);

export const updateAdmin = (id, updateAdmin) =>
  axios.patch(`${urlAdmin}/${id}`, updateAdmin);

export const deleteAdmin = (id) => axios.delete(`${urlAdmin}/${id}`);

const urlUser = "https://elitmus-backend-9rw7.onrender.com/api/users";

export const fetchUser = () => axios.get(urlUser);


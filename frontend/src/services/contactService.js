import axios from "axios";

const API_URL = "http://localhost:5000/api/contact";

export const getContacts = async () => {
  return await axios.get(API_URL);
};

export const deleteContact = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
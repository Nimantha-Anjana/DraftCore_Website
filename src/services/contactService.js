import api from "./api";

export const submitContactEnquiry = async (data) => {
  const response = await api.post("/contact", data);

  return response.data;
};
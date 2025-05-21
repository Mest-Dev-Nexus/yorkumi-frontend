import { apiClient } from "./config";

export const apiSignup = async (payload) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };
  return apiClient.post("user/register", payload, config);
};
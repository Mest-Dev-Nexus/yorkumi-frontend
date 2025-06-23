import { apiClient } from "./config";

// Save token and user data to localStorage
const saveAuthData = (token, user) => {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

// Clear auth data
const clearAuthData = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  delete apiClient.defaults.headers.common['Authorization'];
};

// Signup user
export const apiSignup = async (userData) => {
  const response = await apiClient.post("/user/register", userData);
  if (response.data.accessToken) {
    saveAuthData(response.data.accessToken, response.data.User);
  }
  return response;
};

// Login user
export const apiLogin = async (email, password) => {
  const response = await apiClient.post("/user/login", { email, password });
  if (response.data.accessTokenLogin) {
    saveAuthData(response.data.accessTokenLogin, response.data.User);
  }
  return response;
};

// Logout user
export const apiLogout = () => {
  clearAuthData();
};

// Get current user
export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};
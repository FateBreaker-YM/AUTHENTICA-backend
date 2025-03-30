import axios from 'axios';

// Base URL for your backend
const API_URL = 'http://127.0.0.1:8000'; // Make sure this matches your backend URL

// Function to create a user
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/create_user/`, userData, {
      headers: {
        'Content-Type': 'multipart/form-data', // To handle file uploads
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

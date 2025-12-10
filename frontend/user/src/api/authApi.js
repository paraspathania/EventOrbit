// Basic mock implementation for authentication

// Mock users database
import apiClient from "./apiClient";

export const loginUser = async (email, password) => {
    try {
        const response = await apiClient.post("/auth/login", { email, password });
        if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Login failed");
    }
};

export const signupUser = async (userData) => {
    try {
        const response = await apiClient.post("/auth/register", userData);
        if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Signup failed");
    }
};

export const logoutUser = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('user_wallet'); // Clear wallet on logout
};

import { api } from '../config/axios';

export async function login(userData) {
    try {
        const response = await api.post('/auth/login', userData);
        return response.data;
    } catch (error) {
        return error;   
    }
}
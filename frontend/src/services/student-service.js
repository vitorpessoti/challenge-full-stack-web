import { api } from '../config/axios';

export async function getStudents() {
    try {
        const response = await api.get('/students');
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function createStudent(student) {
    try {
        const response = await api.post('/students', student);
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function updateStudent(student) {
    try {
        const response = await api.put(`/students/${student.ra}`, student);
        return response.data;
    } catch (error) {
        return error;
    }
}

export async function deleteStudent(ra) {
    try {
        const response = await api.delete(`/students/${ra}`);
        return response.data;
    } catch (error) {
        return error;
    }
}
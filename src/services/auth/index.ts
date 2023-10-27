import { dentalineApi } from "@/api";

interface LoginInput {
    username: string;
    pin: string;
}

export const loginApi = async ({username, pin}: LoginInput) => {
    const { data } = await dentalineApi.post('/auth/login', { username, pin });
    localStorage.setItem('token', JSON.stringify(data.token));
    return data;
}

export const getCurrentUser = async () => {
    const token = JSON.parse(localStorage.getItem('token') || "");
    const { data } = await dentalineApi.get('/users/info', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return data
}
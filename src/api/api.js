import axios from "axios";
import { follow } from "../redux/usersReducer";



const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f4701d8e-373b-4296-b790-4a310a098ee7'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 8) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId){
        return instanse.post(`follow/${userId}`);
    },
    unfollow(userId){
        return instanse.delete(`follow/${userId}`);
    },
    getProfile(userId){
        console.warn('Obsolete method. Please use profileAPI object');
        return profileAPI.getProfile(userId);
    },
}

export const profileAPI = {
    getProfile(userId){
        return instanse.get(`profile/${userId}`);
    },
    getStatus(userId){
        return instanse.get(`profile/status/${userId}`);
    },
    updateStatus(status){
        return instanse.put(`profile/status/`, {status: status});
    }
}

export const authAPI = {
    me() {
        return instanse.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instanse.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instanse.delete(`auth/login`);
    }
}

export const getUsers1 = (currentPage = 1, pageSize = 8) => {
    return instanse.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
    })
        .then(response => {
            return response.data
        });
}


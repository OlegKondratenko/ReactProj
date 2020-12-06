import Axios from "axios";


const instance = Axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "91a8cd03-3d4c-4ad9-9905-606364193f59",
    }
})

export const AuthAPI = {
    loggingIn: (loginData) => {
        return (instance.post(`auth/login`, loginData)
            .then(response => response.data))
    },
    logout: () => {
        return (instance.delete(`auth/login`)
            .then(response => response.data))
    },
    getAuthInfo: () => {
        return (instance.get(`auth/me`)
            .then(response => { if (response.data.resultCode === 0) { return response.data.data } else return null }))
    },

}
export const UsersAPI = {
    getUsers: (page = 1, pageSize = 20) => {
        return (instance.get(`users?page=${page}&count=${pageSize}`))
            .then(response => response.data)
    },
    follow: (userId) => {
        return (instance.post(`follow/${userId}`))
            .then(response => { if (response.data.resultCode === 0) return true })
    },
    unfollow: (userId) => {
        return (instance.delete(`follow/${userId}`))
            .then(response => { if (response.data.resultCode === 0) return true })
    }

}

export const ProfileAPI = {
    getUserProfileData: (userId) => {
        return (instance.get(`profile/${userId}`)
            .then(response => response.data))
    },
    getUserStatus: (userId) => {
        return (instance.get(`profile/status/${userId}`)
            .then(response => { return response.data }))
    },
    changeUserStatus: (status) => {
        return (instance.put(`profile/status`, { "status": status })
            .then(response => response.data))
    }
}


import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "58f1b79a-5b08-4add-9043-639dedc61352"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        )
            .then((response: AxiosResponse) => {
                return response.data
            })
    },
    getUserProfile(userId: string | number) {
        console.warn('Obsolete method/ Please use profileAPI object')
        return profileAPI.getUserProfile(userId)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`, {}, {})
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`, {})
    }
}
export const profileAPI = {
    getUserProfile(userId: string | number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string | number){
        return instance.get(`/profile/status/${userId}`)
    },
    setStatus(status: string){
        return instance.put(`/profile/status`, {status})
    }
}
export const authAPI = {
    getMe() {
        return instance.get(`auth/me`, {})
    },
    login(email:string, password:string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

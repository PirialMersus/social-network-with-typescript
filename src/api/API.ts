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
        return instance.get(`profile/${userId}`)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`, {}, {})
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`, {})
    }
}
export const authAPI = {
    getMe() {
        return instance.get(`auth/me`, {})
    },
    getStatus(){
        return instance.get(`/profile/status/2`, {})
    },
    setStatus(status: string){
        return instance.put(`/profile/status`, {status})
    }
}

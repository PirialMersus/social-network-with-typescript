import {ProfileResponseType} from "../components/Profile/ProfileContainer";
import {PostType} from "./store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/API";
import {AxiosResponse} from "axios";
import {setIsFetching} from "./users-reducer";

export type ProfilePageType = {
    posts: Array<PostType>
    profile: ProfileResponseType | null
    status: string
}

const initialState = {
    posts: [
        {id: 1, message: "React", likesCount: 5},
        {id: 2, message: "sdfsdfs", likesCount: 10},
        {id: 3, message: "_______", likesCount: 0},
        {id: 4, message: "nes845k50-__+__++___", likesCount: 45},
        {id: 5, message: "sdfsdfs", likesCount: 100},
        {id: 6, message: "sdfsdfs", likesCount: 53},
    ],
    profile: null,
    status: ''
}

export const addPostActionCreator = (postText: string) => ({type: "ADD-POST", postText}) as const
type AddPostActionType = ReturnType<typeof addPostActionCreator>
export const setUserProfile = (userInfo: ProfileResponseType) => ({type: "SET_USER_PROFILE", userInfo}) as const
type SetUserProfileActionType = ReturnType<typeof setUserProfile>


export type ProfileReducerActionsType =
    AddPostActionType
    | SetUserProfileActionType
    | SetStatusActionType

const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {
                id: (state.posts.length + 1),
                message: action.postText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case "SET_USER_PROFILE":
            return {
                ...state,
                profile: action.userInfo
            }
        case "SET_STATUS": {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

const setStatusAC = (status: string) => {
    return ({
        type: "SET_STATUS",
        status
    }) as const
}
type SetStatusActionType = ReturnType<typeof setStatusAC>

export const getUserProfileThunkCreator = (userId: number | string) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        usersAPI.getUserProfile(userId)
            .then((response: AxiosResponse) => {
                dispatch(setUserProfile(response.data))
                dispatch(setIsFetching(false))
            })
    }
}

export const setStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.setStatus(status)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(setStatusAC(status))
                }
            })
    }
}
export const getStatusThunkCreator = (userId: number | string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then((res) => {
                dispatch(setStatusAC(res.data))
            })
    }
}


export default profileReducer
import {ProfileResponseType} from "../components/Profile/ProfileContainer";
import {ProfilePageType} from "./store";
import {Dispatch} from "redux";
import {authAPI, usersAPI} from "../api/API";
import {AxiosResponse} from "axios";
import {setIsFetching} from "./users-reducer";
import {debuglog} from "util";

const ADD_POST = "ADD-POST"
const ON_CHANGE_POST_FIELD = "ON-CHANGE-POST-FIELD"
const SET_USER_PROFILE = "SET_USER_PROFILE"

const initialState = {
    posts: [
        {id: 1, message: "React", likesCount: 5},
        {id: 2, message: "sdfsdfs", likesCount: 10},
        {id: 3, message: "_______", likesCount: 0},
        {id: 4, message: "nes845k50-__+__++___", likesCount: 45},
        {id: 5, message: "sdfsdfs", likesCount: 100},
        {id: 6, message: "sdfsdfs", likesCount: 53},
    ],
    tempPostValue: '',
    profile: null,
    status: '--------'
}

export const addPostActionCreator = () => ({type: ADD_POST}) as const
type AddPostActionType = ReturnType<typeof addPostActionCreator>
export const setUserProfile = (userInfo: ProfileResponseType) => ({type: SET_USER_PROFILE, userInfo}) as const
type SetUserProfileActionType = ReturnType<typeof setUserProfile>

export const updateNewPostTextActionCreator = (text: string) => (
    {type: ON_CHANGE_POST_FIELD, text} as const
)
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>

type ProfileReducerActionsType =
    AddPostActionType
    | SetUserProfileActionType
    | UpdateNewPostTextActionType
    | SetStatusActionType

const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: (state.posts.length + 1),
                message: state.tempPostValue,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                tempPostValue: ''
            }
        case ON_CHANGE_POST_FIELD:
            return {
                ...state,
                tempPostValue: action.text
            }
        case SET_USER_PROFILE:
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
    debugger

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
    debugger
    return (dispatch: Dispatch) => {
        authAPI.setStatus(status)
            .then((res) => {
                debugger

                dispatch(setStatusAC(status))
            })
    }
}

export default profileReducer
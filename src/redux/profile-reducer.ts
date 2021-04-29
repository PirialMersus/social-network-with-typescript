import {ProfileResponseType} from "../components/Profile/ProfileContainer";
import {ProfilePageType} from "./store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/API";
import {AxiosResponse} from "axios";
import {followUnfollowSwitch, setIsFetching, unfollowSuccess} from "./users-reducer";

const ADD_POST = "ADD-POST"
const ON_CHANGE_POST_FIELD = "ON-CHANGE-POST-FIELD"
const SET_USER_PROFILE = "SET_USER_PROFILE"

type SetUserProfileType = {
    type: "SET_USER_PROFILE"
    userInfo: ProfileResponseType
}
export type ProfileReducerActionType = {
    type: "ADD-POST" | "ON-CHANGE-POST-FIELD"
    text: string
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
    tempPostValue: '',
    profile: null
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (userInfo: ProfileResponseType) => ({type: SET_USER_PROFILE, userInfo})
export const updateNewPostTextActionCreator = (text: string) => (
    {type: ON_CHANGE_POST_FIELD, text}
)

const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerActionType | SetUserProfileType) => {
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
        default:
            return state
    }
}

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

export default profileReducer
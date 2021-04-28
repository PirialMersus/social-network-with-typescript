import {usersAPI} from "../api/usersAPI";
import {HandleThunkActionCreator} from "react-redux";
import {Dispatch} from "redux";
import {AxiosResponse} from "axios";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const FOLLOW_UNFOLLOW_SWITCH = "FOLLOW_UNFOLLOW_SWITCH"

export type UserResponseType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    },
    status: string | null
    followed: boolean
}

export type FollowActionType = {
    type: "FOLLOW"
    id: number
}
export type IsFetchingActionType = {
    type: "SET_IS_FETCHING"
    isFetching: boolean
}

export type UnfollowActionType = {
    type: "UNFOLLOW"
    id: number
}
export type SetCurrentPageActionType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}
export type SetTotalUsersCountActionType = {
    type: "SET_TOTAL_USERS_COUNT"
    totalCount: number
}

export type SetUsersActionType = {
    type: "SET_USERS"
    users: Array<UserResponseType>
}
export type FollowUnfollowSwitchActionType = {
    type: "FOLLOW_UNFOLLOW_SWITCH"
    userId: number
    isFetching: boolean
}

export type DataResponseType = {
    items: Array<UserResponseType>
    totalCount: number
}

type ActionsType =
    FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | IsFetchingActionType
    | FollowUnfollowSwitchActionType


const initialState: UsersPageType = {
    users: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followedIDs: []
}

export type UsersPageType = {
    users: Array<UserResponseType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followedIDs: Array<number>
}


const usersReducer = (state = initialState, action: ActionsType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    } else {
                        return {...user}
                    }

                })
            }
        case  UNFOLLOW:
            return {
                ...state, users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    } else {
                        return user
                    }
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case SET_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case FOLLOW_UNFOLLOW_SWITCH:
            return {
                ...state,
                followedIDs: action.isFetching
                    ? [...state.followedIDs, action.userId]
                    : state.followedIDs.filter(id => id !== action.userId)

            }
        default:
            return state
    }
}

export const followSuccess = (id: number) => ({type: FOLLOW, id})
export const unfollowSuccess = (id: number) => ({type: UNFOLLOW, id})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const setUsers = (users: Array<UserResponseType>) => ({type: SET_USERS, users})
export const setIsFetching = (isFetching: boolean) => ({type: SET_IS_FETCHING, isFetching})
export const followUnfollowSwitch = (isFetching: boolean, id: number) => ({
    type: FOLLOW_UNFOLLOW_SWITCH,
    userId: id,
    isFetching
})

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        usersAPI.getUsers(currentPage, pageSize)
            .then((data: DataResponseType) => {
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
                dispatch(setIsFetching(false))
            })
    }
}
export const follow = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(followUnfollowSwitch(true, id))
        usersAPI.follow(id)
            .then((response: AxiosResponse) => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(id))
                }
                dispatch(followUnfollowSwitch(false, id))
            })
    }
}
export const unfollow = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(followUnfollowSwitch(true, id))
        usersAPI.unfollow(id)
            .then((response: AxiosResponse) => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(id))
                }
                dispatch(followUnfollowSwitch(false, id))
            })
    }
}

export default usersReducer
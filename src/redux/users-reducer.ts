import {UsersPageType} from "./store"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

export type UserResponseType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    },
    status: string | null
    followed: false
}

export type FollowUnfollowActionType = {
    type: "FOLLOW" | "UNFOLLOW" | "SET_USERS"
    id: number
    users: Array<UserResponseType>
}

const initialState = {users: []}


const usersReducer = (state: UsersPageType = initialState, action: FollowUnfollowActionType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    } else {
                        return user
                    }
                })
            }
            case UNFOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    } else {
                        return user
                    }
                })
            }
            case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followActionCreator = (id: number) => ({type: FOLLOW, id})
export const unfollowActionCreator = (id: number) => ({type: UNFOLLOW, id})
export const setUsersActionCreator = (users: Array<UserResponseType>) => ({type: SET_USERS, users})

export default usersReducer
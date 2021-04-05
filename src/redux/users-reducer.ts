import {UsersPageType, UserType} from "./store"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

export type FollowUnfollowActionType = {
    type: "FOLLOW" | "UNFOLLOW" | "SET_USERS"
    id: number
    users: Array<UserType>
}

const initialState = {users: []}


const usersReducer = (state: UsersPageType = initialState, action: FollowUnfollowActionType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, isFriend: true}
                    } else {
                        return user
                    }
                })
            }
            case UNFOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, isFriend: false}
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
export const setUsersActionCreator = (users: Array<UserType>) => ({type: SET_USERS, users})

export default usersReducer
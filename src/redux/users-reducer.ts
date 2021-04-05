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
    followed: boolean
}

export type FollowActionType = {
    type: "FOLLOW"
    id: number
}

export type UnfollowActionType = {
    type: "UNFOLLOW"
    id: number
}

export type SetUsersActionType = {
    type: "SET_USERS"
    users: Array<UserResponseType>
}

type ActionsType = FollowActionType | UnfollowActionType | SetUsersActionType


const initialState: UsersPageType = {
    users: []
}
type InitialStateType = typeof initialState

export type UsersPageType = {
    users: Array<UserResponseType>
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
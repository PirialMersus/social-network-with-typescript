const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_IS_FETCHING = "SET_IS_FETCHING"

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

type ActionsType =
    FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | IsFetchingActionType


const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export type UsersPageType = {
    users: Array<UserResponseType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
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
        default:
            return state
    }
}

export const followActionCreator = (id: number) => ({type: FOLLOW, id})
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const unfollowActionCreator = (id: number) => ({type: UNFOLLOW, id})
export const setUsersActionCreator = (users: Array<UserResponseType>) => ({type: SET_USERS, users})
export const setIsFetchingAC = (isFetching: boolean) => ({type: SET_IS_FETCHING, isFetching})

export default usersReducer
const SET_USER_DATA = "SET_USER_DATA"


export type SetUserDataActionType = {
    type: "SET_USER_DATA"
    data: {
        id: number | null
        login: string | null
        email: string | null
    }
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

export type AuthStateType = {
    id: number | null
    login: string | null
    email: string | null
}

type ActionsType = SetUserDataActionType


const initialState: AuthStateType = {
    id: null,
    login: null,
    email: null
}


const authReducer = (state = initialState, action: ActionsType): AuthStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data
            }

        default:
            return state
    }
}

export const setUserDataAC = (userId: number, login: string, email: string) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        login,
        email
    }

})

export default authReducer
import {Dispatch} from "redux";
import {authAPI} from "../api/API";
import {AxiosResponse} from "axios";
import {ThunkAction} from "redux-thunk";
import {AppActionsType, AppStateType, AppThunk} from "./redux-store";

const SET_USER_DATA = "SET_USER_DATA"


export type SetUserDataActionType = {
    type: "SET_USER_DATA"
    payload: {
        id: number | null
        login: string | null
        email: string | null
        isAuth: boolean | null
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
    isAuth: boolean | null
}

export type AuthActionsType = SetUserDataActionType


const initialState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}


const authReducer = (state = initialState, action: AuthActionsType): AuthStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}

export const setUserDataAC = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {
        userId,
        login,
        email,
        isAuth
    }
})

export const getMeThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.getMe()
            .then((response: AxiosResponse) => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserDataAC(response.data.data.id, response.data.data.login, response.data.data.email, true))
                }
            })
    }
}
export const login = (email: string, password: string, rememberMe: boolean): AppThunk => async dispatch => {
    try {
        const response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getMeThunkCreator())
        }
    } catch (e) {
        throw new Error(e)
    }
}
export const logout = (): AppThunk => async dispatch => {
    try {
        const response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setUserDataAC(null, null, null, false))
        }
    } catch (e) {
        throw new Error(e)
    }
}

export const login1 = (email: string, password: string, rememberMe: boolean): AppThunk => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then((response: AxiosResponse) => {
                if (response.data.resultCode === 0) {
                    dispatch(getMeThunkCreator())
                }
            })
    }
}

export default authReducer
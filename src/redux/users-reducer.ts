import { DialogsPageType, UsersPageType } from "./store"
import store from './store'

const ADD_MESSAGE = "ADD-MESSAGE"
const ON_CHANGE_MESSAGE_FIELD = "ON-CHANGE-MESSAGE-FIELD"

export type UsersReducerActionType = {
    type: "ADD-MESSAGE" | "ON-CHANGE-MESSAGE-FIELD"
    text: string
}

const initialState = store.getState().usersPage


const usersReducer = (state: UsersPageType = initialState, action: UsersReducerActionType) => {
    switch (action.type) {
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const onChangeMessageFieldActionCreator = (message: string) => (
    {
        type: ON_CHANGE_MESSAGE_FIELD,
        text: message
    }
)

export default usersReducer
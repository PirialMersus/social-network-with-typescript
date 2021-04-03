
const ADD_MESSAGE = "ADD-MESSAGE"
const ON_CHANGE_MESSAGE_FIELD = "ON-CHANGE-MESSAGE-FIELD"

export type UsersReducerActionType = {
    type: "ADD-MESSAGE" | "ON-CHANGE-MESSAGE-FIELD"
    text: string
}

const initialState = {
    users: [
        {id: 1, name: "Galina", isFriend: false},
        {id: 1, name: "Gena", isFriend: true},
        {id: 1, name: "Gleb", isFriend: false},
        {id: 1, name: "Grigorii", isFriend: true},
        {id: 1, name: "Gurudji", isFriend: false},
    ]
}


const usersReducer = (state: DialogsPageType = initialState, action: UsersReducerActionType) => {
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
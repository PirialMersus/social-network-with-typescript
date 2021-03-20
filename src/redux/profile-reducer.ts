import {ProfilePageType} from "./store";

const ADD_POST = "ADD-POST"
const ON_CHANGE_POST_FIELD = "ON-CHANGE-POST-FIELD"

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
    tempPostValue: ''
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string) => (
    {type: ON_CHANGE_POST_FIELD, text}
)

const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerActionType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: (state.posts.length + 1),
                message: state.tempPostValue,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.tempPostValue = ''
            return state
        case ON_CHANGE_POST_FIELD:
            state.tempPostValue = action.text
            return state
        default:
            return state
    }

}
export default profileReducer
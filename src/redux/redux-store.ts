import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});


const store = createStore(rootReducer)

export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>

export default store


// @ts-ignore
window.store = store
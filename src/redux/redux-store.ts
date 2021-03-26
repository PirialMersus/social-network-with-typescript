import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer
});


const store = createStore(reducers)

export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof reducers>

export default store


// @ts-ignore
window.store = store
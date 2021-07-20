import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer, {DialogsReducerActionType} from "./dialogs-reducer";
import profileReducer, {ProfileReducerActionsType} from "./profile-reducer";
import sidebarReducer, {SideBarActionsType} from "./sidebar-reducer";
import usersReducer, {UsersActionsType} from "./users-reducer";
import authReducer, {AuthActionsType} from "./auth-reducer";
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware, { ThunkAction } from "redux-thunk";

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>

export default store

export type AppActionsType = AuthActionsType
    | DialogsReducerActionType
    | ProfileReducerActionsType
    | SideBarActionsType
    | UsersActionsType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>


// @ts-ignore
window.store = store
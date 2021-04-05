import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    followActionCreator,
    setUsersActionCreator,
    unfollowActionCreator,
    UserResponseType,
    UsersPageType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    usersPage: UsersPageType
}

const mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (id: number) => {
            dispatch(followActionCreator(id))
        },
        unfollow: (id: number) => {
            dispatch(unfollowActionCreator(id))
        },
        setUsers: (users: Array<UserResponseType>) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer

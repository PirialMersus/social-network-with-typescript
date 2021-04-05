import React, {Dispatch} from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {RootStateType, UserType} from "../../redux/store";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../redux/users-reducer";


const mapStateToProps = (state: RootStateType) => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        follow: (id: number) => {
            dispatch(followActionCreator(id))
        },
        unfollow: (id: number) => {
            dispatch(unfollowActionCreator(id))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer

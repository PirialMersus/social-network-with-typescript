import React, {Dispatch} from "react";
import {addMessageActionCreator, onChangeMessageFieldActionCreator} from "../../redux/dialogs-reducer";
import Users from "./Users";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";


const mapStateToProps = (state: RootStateType) => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        onChangeFunction: (message: string) => {
            dispatch(onChangeMessageFieldActionCreator(message))
        },
        addNewMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer

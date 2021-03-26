import React, {Dispatch} from "react";
import {addMessageActionCreator, onChangeMessageFieldActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";


const mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer

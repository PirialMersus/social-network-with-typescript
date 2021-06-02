import {Dispatch} from "react";
import {addMessageActionCreator, onChangeMessageFieldActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";


const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
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


// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Dialogs))
export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

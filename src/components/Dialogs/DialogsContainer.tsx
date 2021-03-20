import React from "react";
import {addMessageActionCreator, onChangeMessageFieldActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>{(store) => {
            const addNewMessage = () => {
                store?.dispatch(addMessageActionCreator())
            }

            const onChangeFunction = (message: string) => {
                store?.dispatch(onChangeMessageFieldActionCreator(message))
            }
            return (<Dialogs
                addNewMessage={addNewMessage}
                onChangeFunction={onChangeFunction}
                dialogsPage={store?.getState().dialogsPage}
            />)
        }}</StoreContext.Consumer>)
}
export default DialogsContainer
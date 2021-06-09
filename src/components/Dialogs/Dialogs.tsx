import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Messages/Message";
import AddMessageReduxForm from "./AddMessageForm/AddMessageForm";
import {DialogsPageType} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    dialogsPage: DialogsPageType | undefined
    addNewMessage: (message: string) => void
}

const Dialogs = (props: DialogsPropsType) => {


    //
    // const onChangeFunction = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     let message = e.currentTarget.value
    //     props.onChangeFunction(message)
    // }
    const onSubmit = (formData: any) => {
        props.addNewMessage(formData.messageText)
        console.log(formData)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage?.dialogs.map(item => {
                    return <DialogItem key={item.id} name={item.name} id={item.id} icon={item.icon}/>
                })}
            </div>
            <div className={s.messages}>
                {props.dialogsPage?.messages.map(message => {
                    return <Message key={message.id} message={message.message}/>
                })}
                <AddMessageReduxForm onSubmit={onSubmit}/>
                {/*<div>*/}
                {/*    <textarea onChange={onChangeFunction} value={props.dialogsPage?.tempMessage}/>*/}
                {/*</div>*/}
                {/*<button onClick={addNewMessage}>Add message</button>*/}
            </div>
        </div>)
}
export default Dialogs
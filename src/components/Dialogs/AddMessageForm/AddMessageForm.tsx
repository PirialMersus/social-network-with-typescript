import React from "react";
import {Field, reduxForm} from 'redux-form'
import {InjectedFormProps} from 'redux-form';

const AddMessageForm = (props: InjectedFormProps) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text"
                       placeholder='message text'
                       name={'messageText'}
                       component={"textarea"}
                    // value={props.value}
                />
            </div>

            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}
const AddMessageReduxForm = reduxForm({form: 'addMessageForm'})(AddMessageForm)

export default AddMessageReduxForm
import React from "react";
import {Field, reduxForm} from 'redux-form'
import {InjectedFormProps} from 'redux-form';
import {maxLength10, required, validate} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const AddMessageForm = (props: InjectedFormProps) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text"
                       placeholder='message text'
                       name={'messageText'}
                       validate={[required, maxLength10]}
                       component={Textarea}
                />
            </div>

            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}
const AddMessageReduxForm = reduxForm({form: 'addMessageForm', validate})(AddMessageForm)

export default AddMessageReduxForm
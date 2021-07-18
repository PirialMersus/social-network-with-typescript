import React from "react";
import {Field, reduxForm} from 'redux-form'
import {InjectedFormProps} from 'redux-form';
import {maxLength10, required, validate} from "../../../../utils/validators/validators";
import {Textarea} from "../../../../common/FormsControls/FormsControls";

const AddPostForm = (props: InjectedFormProps) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text"
                       placeholder='post text'
                       name={'postText'}
                       component={Textarea}
                       validate={[required, maxLength10]}
                />
            </div>

            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddPostReduxForm = reduxForm({form: 'addPostForm', validate})(AddPostForm)

export default AddPostReduxForm
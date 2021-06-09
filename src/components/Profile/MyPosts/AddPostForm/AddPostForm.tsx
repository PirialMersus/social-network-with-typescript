import React from "react";
import {Field, reduxForm} from 'redux-form'
import {InjectedFormProps} from 'redux-form';

type CommonAddPostFormType =  & {
    value: string | undefined
}

const AddPostForm = (props: InjectedFormProps) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field type="text"
                        placeholder='post text'
                        name={'postText'}
                        component={"textarea"}
                        // value={props.value}
            />
            </div>

            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddPostReduxForm = reduxForm({form: 'addPostForm'})(AddPostForm)

export default AddPostReduxForm
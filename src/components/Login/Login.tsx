import React from "react";
import {Field, reduxForm} from 'redux-form'
import { InjectedFormProps } from 'redux-form';
import { Input } from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props: InjectedFormProps) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text"
                       placeholder='Login'
                       name={'login'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field type="password"
                       placeholder='Password'
                       name={'password'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field type={'checkbox'} component={Input} name={'rememberMe'}/>
                <span>remember me</span>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login
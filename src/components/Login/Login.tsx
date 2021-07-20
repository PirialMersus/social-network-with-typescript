import React from "react";
import {Field, reduxForm} from 'redux-form'
import {InjectedFormProps} from 'redux-form';
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

const LoginForm = (props: InjectedFormProps) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text"
                       placeholder='Email'
                       name={'email'}
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

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    logout: () => void
    isAuth: boolean | null
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: any) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login)
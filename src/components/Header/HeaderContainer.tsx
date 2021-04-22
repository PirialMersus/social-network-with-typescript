import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import axios, {AxiosResponse} from "axios";
import {setUserDataAC} from "../../redux/auth-reducer";

type HeaderContainerPropsType = {
    login: string | null
    setUserDataAC: (userId: number, login: string, email: string) => void
}

type AuthResponseType = {
    resultCode: number
    messages: string[]
    data: {
        id: number
        email: string
        login: string
    }
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response: AxiosResponse) => {
                console.log(response.data)
                if (response.data.resultCode === 0) {
                    this.props.setUserDataAC(response.data.data.id, response.data.data.login, response.data.data.email)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {
    setUserDataAC,
})(HeaderContainer)
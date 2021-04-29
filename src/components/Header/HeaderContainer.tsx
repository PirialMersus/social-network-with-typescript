import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import axios, {AxiosResponse} from "axios";
import {setUserDataAC, getMeThunkCreator} from "../../redux/auth-reducer";
import { authAPI } from "../../api/API";

type HeaderContainerPropsType = {
    login: string | null
    setUserDataAC: (userId: number, login: string, email: string) => void
    getMeThunkCreator: () => void
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
        this.props.getMeThunkCreator()
        // authAPI.getMe()
        //     .then((response: AxiosResponse) => {
        //         if (response.data.resultCode === 0) {
        //             this.props.setUserDataAC(response.data.data.id, response.data.data.login, response.data.data.email)
        //         }
        //     })
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
    setUserDataAC, getMeThunkCreator
})(HeaderContainer)
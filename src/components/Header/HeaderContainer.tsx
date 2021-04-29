import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getMeThunkCreator, setUserDataAC} from "../../redux/auth-reducer";

type HeaderContainerPropsType = {
    login: string | null
    setUserDataAC: (userId: number, login: string, email: string) => void
    getMeThunkCreator: () => void
}

// type AuthResponseType = {
//     resultCode: number
//     messages: string[]
//     data: {
//         id: number
//         email: string
//         login: string
//     }
// }

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        this.props.getMeThunkCreator()
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
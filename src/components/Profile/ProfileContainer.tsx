import React from "react";
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setIsFetching} from "../../redux/users-reducer";
import {
    getStatusThunkCreator,
    getUserProfileThunkCreator,
    setStatusThunkCreator,
    setUserProfile
} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

export type ProfileResponseType = {

    userId: number
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    fullName: string | null
    contacts: {
        github: string | null
        vk: string | undefined
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    } | null
    photos: {
        small: string | null
        large: string | null
    }
}

type PathParamsType = {
    userId: string,
}

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & {
    status: string
    userId: number | undefined
    profile: ProfileResponseType | null
    isFetching: boolean
    setIsFetching: (isFetching: boolean) => void
    setUserProfile: (UserInfo: ProfileResponseType) => void
    getUserProfileThunkCreator: (userId: number | string) => void
    setStatusThunkCreator: (status: string) => void
    getStatusThunkCreator: (userId: number | string) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.userId || "16687"
        this.props.getUserProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     setStatusThunkCreator={this.props.setStatusThunkCreator}
            />)
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isFetching: state.usersPage.isFetching,
        profile: state.profilePage.profile,
        userId: state.profilePage.profile?.userId,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setIsFetching,
        setUserProfile,
        getUserProfileThunkCreator,
        setStatusThunkCreator,
        getStatusThunkCreator
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


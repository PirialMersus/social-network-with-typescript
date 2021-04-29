import React from "react";
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setIsFetching} from "../../redux/users-reducer";
import {getUserProfileThunkCreator, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

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
    userId: number | undefined
    profile: ProfileResponseType | null
    isFetching: boolean
    setIsFetching: (isFetching: boolean) => void
    setUserProfile: (UserInfo: ProfileResponseType) => void
    getUserProfileThunkCreator: (userId: number | string) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.userId || "2"
        this.props.getUserProfileThunkCreator(userId)

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>)
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isFetching: state.usersPage.isFetching,
        profile: state.profilePage.profile,
        userId: state.profilePage.profile?.userId
    }
}

const withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setIsFetching,
    setUserProfile,
    getUserProfileThunkCreator
})(withUrlDataContainerComponent)

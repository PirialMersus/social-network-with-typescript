import React from "react";
import Profile from "./Profile";
import axios, {AxiosResponse} from "axios";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import Preloader from "../../common/Preloader/Preloder";
import {setIsFetching} from "../../redux/users-reducer";
import {setUserProfile} from "../../redux/profile-reducer";

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

type ProfileContainerPropsType = {
    profile: ProfileResponseType | null
    isFetching: boolean
    setIsFetching: (isFetching: boolean) => void
    setUserProfile: (UserInfo: ProfileResponseType) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response: AxiosResponse) => {
                this.props.setUserProfile(response.data)
                this.props.setIsFetching(false)
            })
    }

    render() {
        return (
            <>{this.props.isFetching
                ? <Preloader/>
                : <Profile {...this.props} profile={this.props.profile}/>}
        </>)
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isFetching: state.usersPage.isFetching,
        profile: state.profilePage.profile
    }
}
export default connect(mapStateToProps, {
    setIsFetching,
    setUserProfile
})(ProfileContainer)

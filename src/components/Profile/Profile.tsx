import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileResponseType} from "./ProfileContainer";

type ProfilePropsType = {
    profile: ProfileResponseType | null
    status: string
    setStatusThunkCreator: (status: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         setStatusThunkCreator={props.setStatusThunkCreator}
            />
            <MyPostsContainer/>
        </div>
    )
}
export default Profile
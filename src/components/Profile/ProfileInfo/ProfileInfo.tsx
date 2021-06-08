import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfileResponseType} from "../ProfileContainer";
import defaultUserPhoto from "../../../img/defaultAva.jpg"
import img from '../../../img/bg_mountains.jpg'
import Status from "./Status/Status";


type ProfileInfoPropsType = {
    profile: ProfileResponseType | null
    status: string
    setStatusThunkCreator: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (props.profile) {
        return (
            <div className={s.content}>
                <div>
                    <img src={props.profile.photos.large
                        ? props.profile.photos.large
                        : defaultUserPhoto
                    } alt="ava"/>
                </div>
                <div className={s.descriptionBlock}>{props.profile.fullName}</div>
                <div className={s.descriptionBlock}>{props.profile.lookingForAJob}</div>
                <div className={s.descriptionBlock}>{props.profile.lookingForAJobDescription}</div>
                <div>
                    <Status status={props.status} setStatusThunkCreator={props.setStatusThunkCreator}/>
                    <h3>Ссылки</h3>
                    {props.profile.contacts && props.profile.contacts.facebook &&
                    <div><a href={props.profile.contacts.facebook}>facebook</a></div>}
                    {props.profile.contacts && props.profile.contacts.instagram &&
                    <div><a href={props.profile.contacts.instagram}>instagram</a></div>}
                    {props.profile.contacts && props.profile.contacts.vk &&
                    <div><a href={props.profile.contacts.vk}>vk</a></div>}
                    {props.profile.contacts && props.profile.contacts.github &&
                    <div><a href={props.profile.contacts.github}>github</a></div>}
                    {props.profile.contacts && props.profile.contacts.twitter &&
                    <div><a href={props.profile.contacts.twitter}>twitter</a></div>}
                    {props.profile.contacts && props.profile.contacts.youtube &&
                    <div><a href={props.profile.contacts.youtube}>youtube</a></div>}
                    {props.profile.contacts && props.profile.contacts.website &&
                    <div><a href={props.profile.contacts.website}>website</a></div>}
                </div>
            </div>
        )
    } else {
        return (
            <div className={s.content}>
                <img src={img} alt="ava"/>
            </div>)
    }
}
export default ProfileInfo
import React from "react";
import s from "./User.module.css"
import defaultUserPhoto from "./../../../img/defaultAva.jpg"
import {NavLink} from "react-router-dom";
import axios, {AxiosResponse} from "axios";
import {API} from "../../../api/api";

type UserPropsType = {
    id: number
    name: string
    imgAddress: string | null
    isFriend: boolean
    location: string | null
    status: string | null
    follow: (id: number) => void
    unfollow: (id: number) => void
}

const User: React.FC<UserPropsType> = ({
                                           id,
                                           name,
                                           imgAddress,
                                           isFriend,
                                           location,
                                           status,
                                           follow,
                                           unfollow
                                       }) => {
    const followHandler = () => {
        // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
        //     withCredentials: true,
        //     headers: {
        //         "API-KEY": "58f1b79a-5b08-4add-9043-639dedc61352"
        //     }
        // })
        API.follow(id)
            .then((response: AxiosResponse) => {
                if (response.data.resultCode === 0) {
                    follow(id)
                }
            })

    }
    const unfollowHandler = () => {
        // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,  {
        //     withCredentials: true,
        //     headers: {
        //         "API-KEY": "58f1b79a-5b08-4add-9043-639dedc61352"
        //     }
        // })
        API.unfollow(id)
            .then((response: AxiosResponse) => {
                if (response.data.resultCode === 0) {
                    unfollow(id)
                }
            })

    }
    return (
        <div className={s.userWrapper}>
            <div className={s.avaAndFollowButtonBlock}>
                <NavLink to={'/profile/' + id}>
                    <img src={imgAddress ? imgAddress : defaultUserPhoto} alt="user img"/>
                </NavLink>
                {isFriend ?
                    <button onClick={unfollowHandler}>unfollow</button> :
                    <button onClick={followHandler}>follow</button>
                }
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.nameAndLocation}>
                    <p>{name}</p>
                    <p>{location}</p>
                </div>
                <span>{status}</span>
            </div>
        </div>
    )
}
export default User
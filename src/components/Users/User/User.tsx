import React, {useState} from "react";
import s from "./User.module.css"
import defaultUserPhoto from "./../../../img/defaultAva.jpg"
import {NavLink} from "react-router-dom";
import axios, {AxiosResponse} from "axios";
import {usersAPI} from "../../../api/usersAPI";

type UserPropsType = {
    id: number
    name: string
    imgAddress: string | null
    isFriend: boolean
    location: string | null
    status: string | null
    follow: (id: number) => void
    unfollow: (id: number) => void
    followedIDs: Array<number>
}

const User: React.FC<UserPropsType> = ({
                                           id,
                                           name,
                                           imgAddress,
                                           isFriend,
                                           location,
                                           status,
                                           follow,
                                           unfollow,
                                           followedIDs
                                       }) => {

    // const [isDisabled, setIsDisabled] = useState(false)
    // debugger
    const followHandler = () => {
        // setIsDisabled(true)
        follow(id)
        // usersAPI.follow(id)
        //     .then((response: AxiosResponse) => {
        //         if (response.data.resultCode === 0) {
        //             follow(id)
        //         }
        //         setIsDisabled(false)
        //     })

    }
    const unfollowHandler = () => {
        // setIsDisabled(true)
        unfollow(id)
        // usersAPI.unfollow(id)
        //     .then((response: AxiosResponse) => {
        //         if (response.data.resultCode === 0) {
        //             unfollow(id)
        //         }
        //         setIsDisabled(false)
        //     })

    }
    return (
        <div className={s.userWrapper}>
            <div className={s.avaAndFollowButtonBlock}>
                <NavLink to={'/profile/' + id}>
                    <img src={imgAddress ? imgAddress : defaultUserPhoto} alt="user img"/>
                </NavLink>
                {isFriend
                    ? <button
                        onClick={unfollowHandler}
                        disabled={followedIDs.some(el => el === id)}>unfollow
                    </button>
                    : <button
                        onClick={followHandler}
                        disabled={followedIDs.some(el => el === id)}>follow
                    </button>
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
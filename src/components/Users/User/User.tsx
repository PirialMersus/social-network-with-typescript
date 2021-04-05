import React from "react";
import s from "./User.module.css"
import defaultUserPhoto from "./../../../img/defaultAva.jpg"

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
        follow(id)
    }
    const unfollowHandler = () => {
        unfollow(id)
    }
    return (
        <div className={s.userWrapper}>
            <div className={s.avaAndFollowButtonBlock}>
                <img src={imgAddress ? imgAddress : defaultUserPhoto} alt="user img"/>
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
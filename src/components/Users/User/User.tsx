import React from "react";
import s from "./User.module.css"

type UserPropsType = {
    id: number
    name: string
    imgAddress: string
    isFriend: boolean
    location: string
    status: string
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
                <img src={imgAddress} alt="user img"/>
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
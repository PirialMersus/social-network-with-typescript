import React from "react";
import s from "./User.module.css"

type UserPropsType = {
    id: number
    name: string
    imgAddress: string
    isFriend: boolean
    location: string
}

const User: React.FC<UserPropsType> = ({
                                           id,
                                           name,
                                           imgAddress,
                                           isFriend,
                                           location
                                       }) => {

    return (
        <div className={s.userWrapper}>
            <div className={s.user}>
                <img src={imgAddress} alt="user img"/>
                <button>{isFriend ? "unfollow" : "follow"}</button>
            </div>
            <div className={s.decription}>
                <p>{name}</p>
                <p></p>
            </div>
        </div>
    )
}
export default User
import React from "react";
import s from "./Users.module.css"
import {UsersPageType} from "../../redux/store";
import User from "./User/User";

type UsersPropsType = {
    usersPage: UsersPageType
}

const Users: React.FC<UsersPropsType> = ({usersPage}) => {
    const usersToPaint = usersPage.users.map(user => {
        return (
            <User
                key={user.id}
                id={user.id}
                name={user.name}
                imgAddress={user.imgAddress}
                isFriend={user.isFriend}
            />
        )
    })
    return (
        <div className={s.usersWrapper}>
            {usersToPaint}
        </div>
    )
}
export default Users
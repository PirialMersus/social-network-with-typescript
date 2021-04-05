import React from "react";
import s from "./Users.module.css"
import {UsersPageType} from "../../redux/store";
import User from "./User/User";
import axios, {AxiosResponse} from "axios";
import {UserResponseType} from "../../redux/users-reducer";

type UsersPropsType = {
    usersPage: UsersPageType
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserResponseType>) => void
}

const Users: React.FC<UsersPropsType> = ({usersPage, follow, unfollow, setUsers}) => {
    if (usersPage.users.length === 0 ) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response: AxiosResponse) => {
            setUsers(response.data.items)
        })
    }
    const usersToRender = usersPage.users.map(user => {
        return (
            <User
                key={user.id}
                id={user.id}
                name={user.name}
                imgAddress={user.photos.large || user.photos.small}
                isFriend={user.followed}
                location={user.uniqueUrlName}
                status={user.status}
                follow={follow}
                unfollow={unfollow}
            />
        )
    })
    return (
        <div className={s.usersWrapper}>
            <h2>Users</h2>
            {usersToRender}
        </div>
    )
}
export default Users
import React from "react";
import s from "./Users.module.css"
import {UserResponseType, UsersPageType} from "../../redux/users-reducer";
import User from "./User/User";

type UsersPropsType = {
    usersPage: UsersPageType
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserResponseType>) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onclickHandler: (currentPage: number) => void
}

const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const spansArray = []
    for (let i = 1; i <= pagesCount; i++) {
        spansArray.push(
            <span
                onClick={() => {
                    props.onclickHandler(i)
                }}
                className={`${props.currentPage === i && s.selectedPage} ${s.paginationSpan}`}
                key={i}
            >{i}
                </span>
        )
    }
    return (
        <div className={s.usersWrapper}>
            <div>
                {spansArray}
            </div>
            <h2>Users</h2>
            {props.usersPage.users.map(user => {
                return (
                    <User
                        key={user.id}
                        // key={v1()}
                        id={user.id}
                        name={user.name}
                        imgAddress={user.photos.large || user.photos.small}
                        isFriend={user.followed}
                        location={user.uniqueUrlName}
                        status={user.status}
                        follow={props.follow}
                        unfollow={props.unfollow}
                    />
                )
            })}
        </div>
    )

}

export default Users
import React from "react";
import s from "./Users.module.css"
import axios, {AxiosResponse} from "axios";
import {UserResponseType, UsersPageType} from "../../redux/users-reducer";
import User from "./User/User";

type UsersPropsType = {
    usersPage: UsersPageType
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserResponseType>) => void
}

class Users extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response: AxiosResponse) => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return (
            <div className={s.usersWrapper}>
                <h2>Users</h2>
                {this.props.usersPage.users.map(user => {
                    return (
                        <User
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            imgAddress={user.photos.large || user.photos.small}
                            isFriend={user.followed}
                            location={user.uniqueUrlName}
                            status={user.status}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Users
import React from "react";
import s from "./Users.module.css"
import axios, {AxiosResponse} from "axios";
import {UserResponseType, UsersPageType} from "../../redux/users-reducer";
import User from "./User/User";
import {v1} from "uuid";

type UsersPropsType = {
    usersPage: UsersPageType
    follow: (id: number) => void
    unfollow: (id: number) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setUsers: (users: Array<UserResponseType>) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onclickHandler(currentPage: number) {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse) => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const spansArray = []
        for (let i = 1; i <= pagesCount; i++) {
            spansArray.push(
                <span
                    onClick={() => {this.onclickHandler(i)}}
                    className={`${this.props.currentPage === i && s.selectedPage} ${s.paginationSpan}`}
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
                {this.props.usersPage.users.map(user => {
                    return (
                        <User
                            // key={user.id}
                            key={v1()}
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
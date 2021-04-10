import Users from "./Users";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    followActionCreator,
    setCurrentPageAC, setIsFetchingAC, setTotalUsersCountAC,
    setUsersActionCreator,
    unfollowActionCreator,
    UserResponseType, UsersPageType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import axios, {AxiosResponse} from "axios";
import s from "./Users.module.css";

type UsersApiContainerPropsType = {
    usersPage: UsersPageType
    follow: (id: number) => void
    unfollow: (id: number) => void
    setIsFetching: (isFetching: boolean) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setUsers: (users: Array<UserResponseType>) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

class UsersContainer extends React.Component<UsersApiContainerPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.setIsFetching(false)
            })
    }

    onclickHandler(currentPage: number) {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then((response: AxiosResponse) => {
                this.props.setUsers(response.data.items)
                this.props.setIsFetching(false)
            })
    }


    render() {

        return (
            <>{this.props.isFetching
                ? <div className={s.usersWrapper}>Loading</div>
                : <Users
                    onclickHandler={this.onclickHandler.bind(this)}
                    usersPage={this.props.usersPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    setUsers={this.props.setUsers}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                />}

            </>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.usersPage,
        usersPage: state.usersPage,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (id: number) => {
            dispatch(followActionCreator(id))
        },
        unfollow: (id: number) => {
            dispatch(unfollowActionCreator(id))
        },
        setUsers: (users: Array<UserResponseType>) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

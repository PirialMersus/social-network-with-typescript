import Users from "./Users";
import {connect} from "react-redux";
import {follow, getUsersThunkCreator, unfollow, UsersPageType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import Preloader from "../../common/Preloader/Preloder";

type UsersApiContainerPropsType = {
    followedIDs: Array<number>
    usersPage: UsersPageType
    follow: (id: number) => void
    unfollow: (id: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}


class UsersContainer extends React.Component<UsersApiContainerPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        // this.props.setIsFetching(true)
        // API.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then((data: DataResponseType) => {
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //         this.props.setIsFetching(false)
        //     })
    }

    onclickHandler(currentPage: number) {
        this.props.getUsersThunkCreator(currentPage, this.props.pageSize)
        // this.props.setCurrentPage(currentPage)

        // this.props.setIsFetching(true)
        // this.props.setCurrentPage(currentPage)
        // API.getUsers(currentPage, this.props.pageSize)
        //     .then((data: DataResponseType) => {
        //         this.props.setUsers(data.items)
        //         this.props.setIsFetching(false)
        //     })
    }


    render() {

        return (
            <>{this.props.isFetching
                ? <Preloader/>
                : <Users
                    onclickHandler={this.onclickHandler.bind(this)}
                    usersPage={this.props.usersPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    followedIDs={this.props.followedIDs}
                />}

            </>
        )
    }
}

type MapStatePropsType = {
    usersPage: UsersPageType
    currentPage: number
    totalUsersCount: number
    pageSize: number
    isFetching: boolean
    followedIDs: Array<number>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        followedIDs: state.usersPage.followedIDs
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    getUsersThunkCreator,
})(UsersContainer)

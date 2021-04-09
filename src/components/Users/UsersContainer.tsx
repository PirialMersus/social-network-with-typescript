import Users from "./Users";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    followActionCreator,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersActionCreator,
    unfollowActionCreator,
    UserResponseType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";

// type MapStatePropsType = {
//     usersPage: UsersPageType
// }

const mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.usersPage,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer

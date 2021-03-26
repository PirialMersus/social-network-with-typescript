import {Dispatch} from "redux"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {RootStateType} from "../../../redux/store";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = (state: RootStateType) => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onChangeFunction: (value: string) => {
            dispatch(updateNewPostTextActionCreator(value))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)



export default MyPostsContainer
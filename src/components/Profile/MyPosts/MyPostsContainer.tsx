import {Dispatch} from "redux"
import {addPostActionCreator} from "../../../redux/profile-reducer";
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
        addPost: (postText: string) => {
            dispatch(addPostActionCreator(postText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)



export default MyPostsContainer
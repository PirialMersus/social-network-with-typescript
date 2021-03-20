import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";

const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>{(store) => {
            const addPost = () => {
                store?.dispatch(addPostActionCreator())
            }

            const onChangeFunction = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
                const text = e.currentTarget.value
                store?.dispatch(updateNewPostTextActionCreator(text))
            }
            return (
                <MyPosts
                    addPost={addPost}
                    onChangeFunction={onChangeFunction}
                    profilePage={store?.getState().profilePage}
                />)
        }}
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer
import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import AddPostReduxForm from "./AddPostForm/AddPostForm";
import { ProfilePageType } from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    profilePage: ProfilePageType | undefined
    addPost: (postText: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    const onSubmit = (formData: any) => {
        console.log(formData)
        props.addPost(formData.postText)
    }

    // const changeCurrentValueHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     props.onChangeFunction(e.currentTarget.value)
    // }

    return (
        <div className={s.content}>
            <div>
                <h3>My Posts</h3>
                <AddPostReduxForm
                    onSubmit={onSubmit}
                    // onChange={changeCurrentValueHandler}
                    // value={props.profilePage?.tempPostValue}
                />

                {/*<div>*/}
                {/*    <textarea*/}
                {/*        onChange={changeCurrentValueHandler}*/}
                {/*        value={props.profilePage?.tempPostValue}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<button onClick={props.addPost}>Add post</button>*/}
            </div>
            <div className={s.posts}>
                {props.profilePage?.posts.map((post) => {
                    return <Post
                        message={post.message}
                        likesCount={post.likesCount}
                        key={post.id}/>
                })}

            </div>
        </div>
    )
}
export default MyPosts
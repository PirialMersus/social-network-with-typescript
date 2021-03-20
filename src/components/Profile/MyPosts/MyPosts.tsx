import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/store";

type MyPostsPropsType = {
    profilePage: ProfilePageType | undefined
    addPost: () => void
    onChangeFunction: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const MyPosts = (props: MyPostsPropsType) => {


    return (
        <div className={s.content}>
            <div>
                <h3>My Posts</h3>
                <div>
                    <textarea
                        onChange={props.onChangeFunction}
                        value={props.profilePage?.tempPostValue}
                    />
                </div>
                <button onClick={props.addPost}>Add post</button>
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
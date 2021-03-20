import React from "react";
import s from "./Post.module.css"

type PostPropsType = {
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://www.peoples.ru/art/cinema/actor/brucelee/6uxxbpn7Qz8pL.jpeg" alt="Bruce Lee"/>
                {props.message}
                <div>
                    <span>{props.likesCount} likes</span>
                </div>
            </div>
        </div>
    )
}
export default Post
import React from "react";
import s from "./Profile.module.css"

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.chitalnya.ru/upload3/597/741f859493d647953313397ea2fd5e7d.jpg" alt="girl"/>
            </div>
            <div>ava + description</div>
            <div>my posts
                <div>New post</div>
            </div>
            <div className={s.posts}>
                <div className={s.item}>Post 1</div>
                <div className={s.item}>Post 2</div>
                <div className={s.item}>Post 3</div>
                <div className={s.item}>Post 4</div>
                <div className={s.item}>Post 5</div>
            </div>
        </div>
    )
}
export default Profile
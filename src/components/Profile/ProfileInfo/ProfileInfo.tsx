import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.chitalnya.ru/upload3/597/741f859493d647953313397ea2fd5e7d.jpg" alt="girl"/>
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    )
}
export default ProfileInfo
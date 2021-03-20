import React from "react";
import {FriendType} from "../../redux/store";
import s from "./Sidebar.module.css"

export type SidebarPropsType = {
    sidebar: Array<FriendType>
}

const Sidebar = (props: SidebarPropsType) => {
    return (
        <div>
            <h3>Best friends</h3>
            <div className={s.friends}>
                {props.sidebar.map((friend: FriendType) => {
                    return (
                        <a href="#" key={friend.id}>
                            <div className={s.friend}>
                                <img src={friend.img} alt={friend.name}/>
                                <p>{friend.name}</p>
                            </div>
                        </a>

                    )
                })}

            </div>
        </div>
    )
}
export default Sidebar
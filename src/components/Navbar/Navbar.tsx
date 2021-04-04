import React from "react"
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import {FriendType} from "../../redux/store";

export type NavbarPropsType = {
    sidebar: Array<FriendType>
}


const Navbar = (props: NavbarPropsType) => {
    return (
        <nav className={s.nav}>
            <div>
                <div className={`${s.item} ${s.active}`}><NavLink to="/profile"
                                                                  activeClassName={s.activeLink}>Profile</NavLink></div>
                <div className={s.item}><NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink></div>
                <div className={s.item}><NavLink to="/news" activeClassName={s.activeLink}>News</NavLink></div>
                <div className={s.item}><NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink></div>
                <div className={s.item}><NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink></div>
                <div className={s.item}><NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink></div>
            </div>
            <Sidebar sidebar={props.sidebar}/>
        </nav>
    )
}
export default Navbar
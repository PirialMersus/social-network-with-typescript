import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"

type HeaderPropsType = {
    login: string | null
    isAuth: boolean | null
    logout: () => void
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src="https://raw.githubusercontent.com/PirialMersus/frontend-js/master/yds/img/logo.png"
                alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>
                        <p>{props.login}</p>
                        <button onClick={props.logout}>Log out</button>
                    </div>
                    : <NavLink to={"/login"}>Login</NavLink>}
            </div>

        </header>
    )
}
export default Header
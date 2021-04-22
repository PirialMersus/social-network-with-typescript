import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"

type HeaderPropsType = {
    login: string | null
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src="https://raw.githubusercontent.com/PirialMersus/frontend-js/master/yds/img/logo.png"
                alt="logo"/>
            <div className={s.loginBlock}>{props.login ? <p>{props.login}</p> :
                <NavLink to={"/login"}>Login</NavLink>}
            </div>

        </header>
    )
}
export default Header
import React from "react";
import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://raw.githubusercontent.com/PirialMersus/frontend-js/master/yds/img/logo.png"
                alt="logo"/>
        </header>
    )
}
export default Header
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogsItemPropsType = {
    id: number
    name: string
    icon: string
}
const DialogItem = (props: DialogsItemPropsType) => {
    return (
        <div>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={"/dialogs/" + props.id}>
                    <img src={props.icon} alt=""/>{props.name}
                </NavLink>
            </div>
        </div>
    )
}
export default DialogItem
import React from "react";
import s from './Status.module.css'
import {setStatusThunkCreator} from "../../../../redux/profile-reducer";
import {useDispatch} from "react-redux";

type StatusPropsType = {
    status: string
}

class Status extends React.Component<StatusPropsType> {
    constructor(props: any) {
        super(props);
        this.dispatch = useDispatch()
    }

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {

        this.setState({
            ...this.state,
            editMode: true
        })
    }
    deactivateEditMode = (status: string) => {
        debugger

        this.setState({
            ...this.state,
            editMode: false
        })
    }
    onChangeHandler = (status: string) => {
        this.setState({
            ...this.state,
            status
        })
    }

    render() {
        return <div className={s.spanWrap}>
            {this.state.editMode ?
                <input autoFocus
                       type="text"
                       placeholder={this.state.status}
                       value={this.state.status}
                       onBlur={(e) => {
                           this.deactivateEditMode(e.target.value)
                       }}
                       onChange={(e) => {this.onChangeHandler(e.currentTarget.value)}}
                />
                : <span onDoubleClick={this.activateEditMode}>{this.state.status}</span>
            }
        </div>;
    }
}

export default Status
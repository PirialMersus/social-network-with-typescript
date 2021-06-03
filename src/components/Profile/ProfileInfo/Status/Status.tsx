import React from "react";
import s from './Status.module.css'

type StatusPropsType = {
    status: string
}

class Status extends React.Component<StatusPropsType> {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return <div className={s.spanWrap}>
            {this.state.editMode ?
                <input autoFocus type="text" placeholder={this.props.status} onBlur={() => {this.deactivateEditMode()}}/>
                : <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
            }
        </div>;
    }
}

export default Status
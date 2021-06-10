import React from "react";
import s from './Status.module.css'

type StatusPropsType = {
    status: string
    setStatusThunkCreator: (status: string) => void
}

class Status extends React.Component<StatusPropsType> {

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
    deactivateEditMode = () => {
        this.setState({
            ...this.state,
            editMode: false
        })
        this.props.setStatusThunkCreator(this.state.status)
    }
    onChangeHandler = (status: string) => {
        this.setState({
            ...this.state,
            status
        })
    }
    componentDidUpdate(prevProps: Readonly<StatusPropsType>, prevState: Readonly<{}>) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div className={s.spanWrap}>
            {this.state.editMode ?
                <input autoFocus
                       type="text"
                       placeholder={this.state.status}
                       value={this.state.status}
                       onBlur={(e) => {
                           this.deactivateEditMode()
                       }}
                       onChange={(e) => {this.onChangeHandler(e.currentTarget.value)}}
                />
                : <span onDoubleClick={this.activateEditMode}>{this.props.status || '---------'}</span>
            }
        </div>;
    }
}

export default Status
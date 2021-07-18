import React from "react";
import s from "./FormsControls.module.css"

// type TextareaPropsType = {}

const FormControl = (props: any) => {
    const {input, meta, children, ...restProps} = props

    const hasError = meta.touched && meta.error;
    return (
        <div className={`${s.formControl} ${hasError && s.error}`}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props: any) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}
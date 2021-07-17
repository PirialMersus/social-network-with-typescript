import React from "react";

type TextareaPropsType = {}
export const Textarea = (props: TextareaPropsType) => {
    return (
        <div>
            <textarea {...props}/>
        </div>
    )
}
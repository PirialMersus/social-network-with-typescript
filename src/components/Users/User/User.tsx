import React from "react";

type UserPropsType = {
    id: number
    name: string
    imgAddress: string
    isFriend: boolean
}

const User: React.FC<UserPropsType> = ({
                                           id,
                                           name,
                                           imgAddress,
                                           isFriend
                                       }) => {

    return (
        <div className="userWrapper">
            User
        </div>
    )
}
export default User
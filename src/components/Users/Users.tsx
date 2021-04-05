import React from "react";
import s from "./Users.module.css"
import {UsersPageType, UserType} from "../../redux/store";
import User from "./User/User";

type UsersPropsType = {
    usersPage: UsersPageType
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
}

const Users: React.FC<UsersPropsType> = ({usersPage, follow, unfollow, setUsers}) => {

    if (usersPage.users.length === 0) {setUsers([
        {
            id: 1,
            name: "Gena",
            imgAddress: "https://i.pinimg.com/280x280_RS/82/f0/a9/82f0a9cd21251f85b9f76bc05167ae6b.jpg",
            isFriend: false,
            location: "Kiev",
            status: "I am a very good programmer"
        },
        {
            id: 2,
            name: "Oleg",
            imgAddress: "https://www.radidomapro.ru/images/unique/585-640-20131022_154525_monastyrg.jpg",
            isFriend: true,
            location: "Odessa",
            status: "I am a very good designer"
        },
        {
            id: 3,
            name: "Artyom",
            imgAddress: "https://sociumin.com/img.php?i=https://sun9-22.userapi.com/impf/c626727/v626727691/2e6f6/A65OTy3fMx4.jpg?size=1280x949&quality=96&sign=c1c716626592807e481a62ba1121c95b&c_uniq_tag=DNxbxckjaqyLA7gNnaudrMBIkv3HaCX1v2h0rdAY2DA&type=album",
            isFriend: false,
            location: "Donetsk",
            status: "I am a very good yoga teacher helper"
        },
        {
            id: 4,
            name: "Sergey",
            imgAddress: "https://namebook.club/images/2945327/icon/2492364.jpg",
            isFriend: false,
            location: "New York",
            status: "I am a very good clown"
        },
        {
            id: 5,
            name: "Dimych",
            imgAddress: "https://i.ibb.co/YTMcLYt/download.jpg",
            isFriend: true,
            location: "Seul",
            status: "I am a very good it coach"
        },
        {
            id: 6,
            name: "Alena",
            imgAddress: "https://i.ibb.co/FsSwFDH/download-1.jpg",
            isFriend: false,
            location: "Puerto Riko",
            status: "I am a very good yoga teacher"
        },
        {
            id: 7,
            name: "Arnold",
            imgAddress: "https://hsto.org/webt/es/-h/qg/es-hqgavgp68u_4abkffylhpgnu.jpeg",
            isFriend: true,
            location: "Marokko",
            status: "I am a very good in everything"
        },
        {
            id: 8,
            name: "Sanya",
            imgAddress: "http://i.piccy.info/i9/67fe4eff36567db7c8477175d01be5bd/1617482451/6058/1423747/9218sanya.jpg",
            isFriend: true,
            location: "Nikolaev",
            status: "I am a very good in boxing"
        },
        {
            id: 9,
            name: "Bruce Lee",
            imgAddress: "https://i.ytimg.com/vi/oBBoYye6-dc/maxresdefault.jpg",
            isFriend: true,
            location: "Kualo Lampur",
            status: "I am a very good in east mortal arts"
        },
    ])}
    const usersToRender = usersPage.users.map(user => {
        return (
            <User
                key={user.id}
                id={user.id}
                name={user.name}
                imgAddress={user.imgAddress}
                isFriend={user.isFriend}
                location={user.location}
                status={user.status}
                follow={follow}
                unfollow={unfollow}
            />
        )
    })
    return (
        <div className={s.usersWrapper}>
            <h2>Users</h2>
            {usersToRender}
        </div>
    )
}
export default Users
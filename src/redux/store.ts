import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import {UserResponseType} from "./users-reducer";
import {ProfileResponseType} from "../components/Profile/ProfileContainer";

// export type UserResponseType = {
//     name: string
//     id: number
//     uniqueUrlName: string | null
//     photos: {
//         small: string | null
//         large: string | null
//     },
//     status: string | null
//     followed: false
// }

export type FriendType = {
    id: number
    img: string
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type PostType = {
    message: string
    likesCount: number
    id: number
}
export type DialogType = {
    name: string
    id: number
    icon: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    tempPostValue: string
    profile: ProfileResponseType | null
}
export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogType>
    tempMessage: string

}
export type ActionType = {
    type: string
    text?: string
}

type UsersPageType = {
    users: Array<UserResponseType>
}
export type RootStateType = {
    usersPage: UsersPageType
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: Array<FriendType>
}
export type RootStoreType = {
    _state: RootStateType
    getState: () => RootStateType
    dispatch: (action: any) => void
    subscribe: (observer: any) => void
    callSubscriber: () => void

}

const store: RootStoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "React", likesCount: 5},
                {id: 2, message: "sdfsdfs", likesCount: 10},
                {id: 3, message: "_______", likesCount: 0},
                {id: 4, message: "nes845k50-__+__++___", likesCount: 45},
                {id: 5, message: "sdfsdfs", likesCount: 100},
                {id: 6, message: "Привет из Одессы", likesCount: 53},
            ],
            tempPostValue: '',
            profile: null
        },
        usersPage: {
            users: [
            ]
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hello"},
                {id: 2, message: "I am here"},
                {id: 3, message: "Man!!!"}
            ],
            tempMessage: '',
            dialogs: [
                {name: 'God', id: 1, icon: "https://ichef.bbci.co.uk/images/ic/640xn/p06w97zx.jpg"},
                {
                    name: 'Gena',
                    id: 2,
                    icon: "https://site-cdn.givemesport.com/images/20/06/11/3c2d72c444a40f4fa34443f07e6c6957/690.jpg"
                },
                {
                    name: 'Kolya',
                    id: 3,
                    icon: "https://www.netbet.co.uk/blog/wp-content/uploads/2020/05/2-5-1024x524.jpg"
                },
                {name: 'Sveta', id: 4, icon: "https://ichef.bbci.co.uk/images/ic/256xn/p06w97m5.jpg"},
                {
                    name: 'Misha',
                    id: 5,
                    icon: "https://i.pinimg.com/170x/72/04/cc/7204ccdde104959f1fd8ac06bdec275f--mike-tyson-mike-dantoni.jpg"
                },
                {
                    name: 'Myachik',
                    id: 6,
                    icon: "https://cdn-img.scalabs.com.au/3JAT-LZd32vxZXo5K5kwRkTc3VFyJUxSeOc7-S-ekkE/aHR0cHM6Ly9zdy1o/aXQtcHJkLnNjYWRp/Z2l0YWwuaW8vbWVk/aWEvNzgxOTgvZ2V0/dHlpbWFnZXMtNTAz/NTA0NDE0LTIuanBn/P3ByZXNldD1NYWlu/SW1hZ2U"
                },
                {name: 'Svoboda', id: 7, icon: "https://images.alphacoders.com/489/489328.jpg"},
                {
                    name: 'Vera',
                    id: 8,
                    icon: "https://wwd.com/wp-content/uploads/2019/05/lionel-messi-athletes-fashion.jpg?w=4296"
                },
                {
                    name: 'Fight',
                    id: 9,
                    icon: "https://i1.wp.com/bestlifeonline.com/wp-content/uploads/2019/08/heath-ledger.jpg?resize=720%2C1200&ssl=1"
                },
                {
                    name: 'Flag',
                    id: 10,
                    icon: "https://qph.fs.quoracdn.net/main-qimg-28fe15d7f4a3adf2dfa2a8c9353b0505.webp"
                },
                {
                    name: 'Earth',
                    id: 11,
                    icon: "https://i.pinimg.com/originals/c3/47/5d/c3475d56833afb5e460942207c078ccb.jpg"
                }
            ]
        },
        sidebar: [
            {
                id: 1,
                img: "https://i.pinimg.com/originals/99/2b/fb/992bfbe31a6f0fa69a0eb61e57aa7fda.jpg",
                name: "Andrew"
            },
            {
                id: 2,
                img: "data:image/jpeg;base64,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",
                name: "Alena"
            },
            {
                id: 3,
                img: "data:image/jpeg;base64,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",
                name: "Sasha"
            }
        ]
    },
    getState() {
        return this._state
    },
    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this.callSubscriber()
    },
    subscribe(observer: () => void) {
        this.callSubscriber = observer
    },
    callSubscriber() {
    }
}

export default store


import { DialogType, MessagesType} from "./store";

export type DialogsPageType = {
    messages: Array<MessagesType>
    dialogs: Array<DialogType>
}

type DialogsReducerActionType = AddMessageActionCreatorType


const initialState  = {
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "I am here"},
        {id: 3, message: "Man!!!"}
    ],
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
}


const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsReducerActionType) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage = {
                id: (state.messages.length + 1),
                message: action.message,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                tempMessage: ''
            }
        // case ON_CHANGE_MESSAGE_FIELD:
        //     return {
        //         ...state,
        //         tempMessage: action.text
        //     }
        default:
            return state
    }
}

export const addMessageActionCreator = (message: string) => ({type: "ADD-MESSAGE", message})
export type AddMessageActionCreatorType = ReturnType<typeof addMessageActionCreator>
// export const onChangeMessageFieldActionCreator = (message: string) => (
//     {
//         type: ON_CHANGE_MESSAGE_FIELD,
//         text: message
//     }
// )

export default dialogsReducer
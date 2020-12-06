

const TEMP_MESSAGE = 'TEMP-MESSAGE';
const SEND_MESSAGE = 'SEND-POST';

let initState = {
    interlocutors: [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Oleh' },
        { id: 3, name: 'Serega' },
        { id: 4, name: 'Hung' },
    ],
    messagesData: [
        { id: 0, message: "hi" },
        { id: 1, message: "hou are u?" },
        { id: 2, message: "keep going mate!" },
        { id: 3, message: "U are Terminator!" },
    ],
}

const dialogsReducer = (state = initState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let message = { id: state.messagesData.length, message: action.message };

            return {

                ...state,
                messagesData: [...state.messagesData, message],
            }
        default:
            return state;
    }

}


export const sendMessageActionCreator = (message) => ({ type: SEND_MESSAGE, message: message })


export default dialogsReducer;
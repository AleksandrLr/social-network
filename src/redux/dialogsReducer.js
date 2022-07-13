const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'User1' },
        { id: 2, name: 'User2' },
        { id: 3, name: 'User3' },
        { id: 4, name: 'User4' },
    ],

    messages: [
        { id: 1, message: 'Message1' },
        { id: 2, message: 'Message2' },
        { id: 3, message: 'Message3' },
        { id: 4, message: 'Message4' },
    ],
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let messageText = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: messageText }],
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});

export default dialogsReducer;
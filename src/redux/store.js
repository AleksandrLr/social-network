import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'Post 1', likesCounts: 10 },
                { id: 2, message: 'Hi, how are you?', likesCounts: 15 },
            ],
            newPostText: 'post text',
        },

        messagesPage: {
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
            newMessageText: "",
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('state changed');
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },



    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }

}



export default store;
window.store = store;
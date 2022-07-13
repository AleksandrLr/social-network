import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import AddMessageForm from './AddMessageForm/AddMessageForm';


const Dialogs = (props) => {
    debugger;
    let state = props.messagesPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);

    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);



    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText);
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
           <AddMessageForm onSubmit={addNewMessage} />
        </div>
    );
}

export default Dialogs;
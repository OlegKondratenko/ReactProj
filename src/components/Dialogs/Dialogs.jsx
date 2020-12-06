import React from 'react';
import Chat from './Chat/Chat';
import Interlocutors from './Interlocutors/Interlocutors';
import s from './Dialogs.module.css'
import { Redirect } from 'react-router-dom';



let Dialogs = (props) => {
    return (
        <div className={s.wrap}>
            <div className={s.interlocutors}><Interlocutors state={props.state.interlocutors} /></div>
            <div className={s.chat}><Chat state={props.state} onSendMessage={props.onSendMessage} onNewMessageChange={props.onNewMessageChange} /></div>
        </div>

    );
}

export default Dialogs;
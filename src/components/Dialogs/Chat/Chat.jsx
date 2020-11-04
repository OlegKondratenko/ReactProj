import React from 'react';
import s from './Chat.module.css'

function Chat(props) {


    const Message = (props) => {
        return (
            <div className={s.message}>
                {props.message}
            </div>);
    }
    let messages = props.state.map(e => <Message message={e.message} key={e.id} />);

    return (
        <div className={s.wrap}>
            {messages}
        </div>
    );
}

export default Chat;
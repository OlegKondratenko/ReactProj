import React from 'react';
import s from './Interlocutors.module.css'
import { NavLink } from 'react-router-dom';

function Interlocutors(props) {

    const Conversation = (props) => {
        return (
            <NavLink to={'/dialogs/' + props.id} className={s.item} >
                <p>{props.name}</p>
            </NavLink>
        )
    }

    let Conversations = props.state.map(e =>
        <Conversation key={e.id} id={e.id} name={e.name} />);

    return (
        <div className={s.wrap}>
            {Conversations}
        </div>
    );
}

export default Interlocutors;
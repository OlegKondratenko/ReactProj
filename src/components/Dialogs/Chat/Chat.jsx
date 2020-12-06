import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/formValidators';
import { Textarea } from '../../common/Preloader/formsControlls/FormsControlls';
import s from './Chat.module.css'

let maxLength5 = maxLengthCreator(5);
let ChatForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='message' component={Textarea} validate={[required, maxLength5]} placeholder='send message to your friend' />
            <br></br>
            <button type='submit'>Send Message </button>
        </form>
    )
}
let ReduxChatForm = reduxForm({ form: 'reduxChat' })(ChatForm)

function Chat(props) {
    const Message = (props) => {
        return (
            <div className={s.message}>
                {props.message}
            </div>);
    }
    let messages = props.state.messagesData.map(e => <Message message={e.message} key={e.id} />);

    let onSubmit = (formData) => {
        let message = formData.message
        props.onSendMessage(message)
    }
    return (
        <div className={s.wrap}>
            {messages}

            <ReduxChatForm onSubmit={onSubmit} />
        </div>
    );
}

export default Chat;
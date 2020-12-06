import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../../utils/validators/formValidators';
import { Textarea } from '../../../common/Preloader/formsControlls/FormsControlls';
import s from './NewPost.module.css';

const maxLength10 = maxLengthCreator(10)

let NewPostForm = (props) => {

    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field name='post' component={Textarea} validate={[required, maxLength10]} placeholder="start writing here"></Field>

        </div>

        <button type='submit'>Add Post</button>
    </form>)
}

let ReduxNewPostForm = reduxForm({ form: "postForm" })(NewPostForm)

function NewPost(props) {

    let onSubmit = (formData) => {
        let newPost = formData.post;
        props.addPost(newPost);

    }
    return (
        <div className={s.posts}>
            <h2>My Post</h2>
            <ReduxNewPostForm onSubmit={onSubmit} />
        </div>);
}

export default NewPost;
import React from 'react';
import NewPost from './NewPost';
import { profileACs } from '../../../../redux/profileReducer';
import { connect } from 'react-redux';

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(profileACs.addPostActionCreator(newPost));
        }
    }
}

let mapStatetoProps = (state) => {
    return {
        newPostText: state.profile.newPostText
    }
}
let NewPostContainer = connect(mapStatetoProps, mapDispatchToProps)(NewPost)

export default NewPostContainer;
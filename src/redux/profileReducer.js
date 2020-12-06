import { ProfileAPI } from '../Api/Api'

const USER_STATUS = 'AUTH-USER-STATUS';
const ADD_POST = "AUTH-ADD-POST";
const SET_PROFILE = "AUTH-SET-PROFILE";

let initState = {
    posts: [
        { id: 0, message: "Some very clever phrase", likesCount: 11 },
        { id: 1, message: "My first post!!!", likesCount: 11 },
        { id: 2, message: "My first post!!!", likesCount: 21 },
        { id: 3, message: "My first post!!!", likesCount: 31 },
    ],
    profileInfo: null,
    status: "default value",
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = { id: state.posts.length, message: action.newPost, likesCount: 0 }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_PROFILE:
            return {
                ...state,
                profileInfo: action.profileInfo

            }
        case USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }

}
export const getStatus = (userId) => {
    return async (dispatch) => {
        let status = await ProfileAPI.getUserStatus(userId);
        dispatch(profileACs.getUserStatus(status));
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await ProfileAPI.changeUserStatus(status)
        if (response.resultCode === 0) { dispatch(profileACs.getUserStatus(status)) }
    }
}
export const setUserProfileData = (userId) => {
    return async (dispatch) => {
        let response = await ProfileAPI.getUserProfileData(userId);
        dispatch(profileACs.setUserProfile(response));
    }
}
export const profileACs = {
    getUserStatus: (status) => ({ type: USER_STATUS, status: status }),
    addPostActionCreator: (newPost) => ({ type: ADD_POST, newPost }),
    setUserProfile: (profileInfo) => ({ type: SET_PROFILE, profileInfo: profileInfo }),
    setUserProfileData: setUserProfileData,
}

export default profileReducer;
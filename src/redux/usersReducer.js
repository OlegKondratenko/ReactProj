import { UsersAPI } from "../Api/Api";

const FOLLOW_UNFOLLOW = 'FOLLOW-UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_FETCHING = 'TOGGLE-FETCHING';

let initState = {
    usersData: [],
    pageSize: 100,
    totalUsersCount: null,
    currentPage: 1,
    isFetching: false,


}

let usersReducer = (state = initState, action) => {

    switch (action.type) {
        case FOLLOW_UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map((el) => {
                    if (el.id === action.id) {
                        return { ...el, followed: !el.followed }
                    } return el;
                })
            }
        case SET_USERS:
            return {
                ...state,
                usersData: action.users,
                totalUsersCount: action.totalUsersCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}


export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(ActionCreators.toggleFetching(true));
        let data = await UsersAPI.getUsers(currentPage, pageSize)
        dispatch(ActionCreators.toggleFetching(false));
        dispatch(ActionCreators.setUsers(data.items, data.totalCount));
    }
}
export const followUserThunk = (userId, isFollowed) => {
    return async (dispatch) => {
        dispatch(ActionCreators.toggleFetching(true));
        let bool = await (isFollowed ? UsersAPI.unfollow(userId) : UsersAPI.follow(userId))
        if (bool) {
            dispatch(ActionCreators.follow(userId));
            dispatch(ActionCreators.toggleFetching(false))
        }
    }
}
export const ActionCreators = {
    follow: (id) => ({ type: FOLLOW_UNFOLLOW, id: id }),
    setUsers: (users, totalCount) => ({ type: SET_USERS, users: users, totalUsersCount: totalCount }),
    setCurrentPage: (currPage) => ({ type: SET_CURRENT_PAGE, currentPage: currPage }),
    toggleFetching: (isFetching) => ({ type: TOGGLE_FETCHING, isFetching: isFetching }),
    getUsersThunkCreator: getUsersThunkCreator,
    followUserThunk: followUserThunk,
}





export default usersReducer;

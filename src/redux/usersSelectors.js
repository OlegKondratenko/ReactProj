import { createSelector } from "reselect";

export const getUsers = (state) => {
    return state.users.usersData;
}
export const pageSize = (state) => {
    return state.users.pageSize;
}
export const totalUsersCount = (state) => {
    return state.users.totalUsersCount;
}
export const currentPage = (state) => {
    return state.users.currentPage;
}
export const isFetching = (state) => {
    return state.users.isFetching;
}

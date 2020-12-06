import React from 'react';
import { compose } from 'redux';
import { ActionCreators } from "../../redux/usersReducer";
import { currentPage, getUsers, isFetching, pageSize, totalUsersCount } from '../../redux/usersSelectors';
import Preloader from '../common/Preloader/Preloader';
import Users from "./Users";
const { connect } = require("react-redux");


class UsersCont extends React.Component {
    constructor(props) {
        super(props);


    }
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (i) => {
        this.props.getUsersThunkCreator(i, this.props.pageSize);
        this.props.setCurrentPage(i);

    }
    render() {

        return (<div>
            {this.props.isFetching ? <Preloader /> : null}
            <Users {...this.props} onPageChanged={this.onPageChanged} />

        </div>)
    }
}

let mapStateToProps1 = (state) => {

    return {
        usersData: getUsers(state),
        pageSize: pageSize(state),
        totalUsersCount: totalUsersCount(state),
        currentPage: currentPage(state),
        isFetching: isFetching(state),

    }
}

export default compose(
    connect(mapStateToProps1, ActionCreators),

)(UsersCont);

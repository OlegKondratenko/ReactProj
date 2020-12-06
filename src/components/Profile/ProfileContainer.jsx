import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { getStatus, setUserProfileData, updateStatus } from '../../redux/profileReducer';
import Profile from './Profile';


class ProfileApi extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.userId;
    }
    if (!userId) { this.props.history.push('/login') }
    this.props.setUserProfileData(userId);
    this.props.getStatus(userId);
  }
  componentDidUpdate() {
  }

  render() {
    return (<Profile {...this.props} />)
  }
}
let mapStateToProps = (state) => {
  return {
    state: state.profile,
    profileInfo: state.profile.profileInfo,
    status: state.profile.status,
    userId: state.authentication.id
  }
}

export default compose(withRouter,
  connect(mapStateToProps, { setUserProfileData, getStatus, updateStatus }))(ProfileApi)
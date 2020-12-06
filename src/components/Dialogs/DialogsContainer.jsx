import Dialogs from './Dialogs'
import { sendMessageActionCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        state: state.dialogs,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: (message) => {
            dispatch(sendMessageActionCreator(message))
        },
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
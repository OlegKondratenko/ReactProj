const { connect } = require("react-redux");
const { default: Sidebar } = require("./Sidebar");

let mapStatetoProps = (state) => {
    return {
        state: state.sidebar,
        isAuth: state.authentication.isAuth,
    }
}

let SidebarContainer = connect(mapStatetoProps,)(Sidebar);

export default SidebarContainer;
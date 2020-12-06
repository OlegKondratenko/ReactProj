import React from 'react'
import { createRef } from "react";



class ProfileInfoStatus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editMode: false,
            status: this.props.status
        }

    }
    componentDidUpdate(prevProps, prevState) {

        if (prevProps.status != this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }

    enableEditMode = () => {
        this.setState({ editMode: true })

    }
    disableEditMode = () => {
        this.setState({ editMode: false, });
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({ status: e.target.value })
    }

    render() {
        return (
            <div>
                {this.state.editMode && <div >
                    <input autoFocus onChange={(e) => this.onStatusChange(e)} defaultValue={this.state.status} onBlur={this.disableEditMode}></input>
                </div>
                }
                {!this.state.editMode && <p onDoubleClick={this.enableEditMode.bind(this)}>My status: {this.props.status}</p>
                }

            </div>
        )
    }
}


export default ProfileInfoStatus;
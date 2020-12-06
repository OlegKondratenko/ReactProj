import React, { useEffect, useState } from 'react'

let ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateMode = () => {
        setEditMode(true);
    }
    const disableEditMode = () => {
        props.updateStatus(status)
        setEditMode(false);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {editMode && <div >
                <input autoFocus onBlur={disableEditMode} onChange={onStatusChange} defaultValue={status}></input>
            </div>
            }

            {!editMode && <p onDoubleClick={activateMode}>My status:{props.status} </p>
            }

        </div>
    )
}



export default ProfileStatusWithHooks;
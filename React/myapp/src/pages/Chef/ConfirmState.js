import React from 'react'
import chef from './Chef.module.css'
import { useState } from 'react'
// import ConfirmState from './ConfirmState'
//

function ConfirmState(props) {
    return (
        <div className={chef.ConfirmState}>
            <span className={chef.confirmTitle}>
                Xác nhận {props.status}
            </span>
            <button onClick={props.onConfirm} className={chef.confirmStateButton}>
                Xác nhận
            </button>
            <button onClick={props.onCancel} className={chef.cancelStateButton}>
                Hủy
            </button>
            {/* <ConfirmState/> */}
        </div>
        
    )
}

export default ConfirmState

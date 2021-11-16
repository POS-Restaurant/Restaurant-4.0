import React from 'react'
import chef from './Chef.module.css'
import ConfirmState from './ConfirmState';
import { useState } from 'react';

function OrderStatePopup(props) {
    
    const [statusButton, setstatusButton] = useState('Hoàn thành')
    const [confirmPopup, setconfirmPopup] = useState(false);
    // function getProp(){
    //     return statusButton;
    // }
    //
    function confirmPopupHandler (status){
        setstatusButton(status);
        setconfirmPopup(true);
    }
    function onConfirmHandler (status){
        setconfirmPopup(false);
        props.onChooseState(status);
    }
    function onCancelHandler (status){
        setconfirmPopup(false);
    }

    return (
        <div className={chef.orderStatePopup}>
            <button onClick={()=>confirmPopupHandler('nhận đơn')} className={chef.acceptOrder}>Nhận đơn</button>
            <button onClick={()=>confirmPopupHandler('hoàn thành')} className={chef.finishOrder}>Hoàn thành</button>
            <button onClick={()=>confirmPopupHandler('hủy đơn')} className={chef.cancelOrder}>Hủy đơn</button>
            {confirmPopup && <ConfirmState status={statusButton} onConfirm={onConfirmHandler} onCancel={onCancelHandler}/>}
        </div>
    )
}

export default OrderStatePopup

import React from 'react'
import chef from './Chef.module.css'
import { useState } from 'react';
import axios from 'axios';

function OrderStatePopup(props) {
    const _id = localStorage.getItem("currentOrder");
    const [state, setState] = useState("Pending");
    const [statusButton, setstatusButton] = useState('')
    const [confirmPopup, setconfirmPopup] = useState(false);
    const update = async () => {
        await axios.post("http://localhost:3000/Order/update/state", {
            params: { id: _id, state: state },
        }).then((res) => alert(res.data.msg));
    };
    function confirmPopupHandler (status){
        setState(status);
        if(status === "Done") setstatusButton("Hoàn thành");
        else if(status === "Canceled") setstatusButton("Hủy đơn");
        else if(status === "Doing") setstatusButton("Nhận đơn");
        setconfirmPopup(true);
    }
    function onConfirmHandler (status){
        setconfirmPopup(false);
        update();
        props.onChooseState(status);
        
    }
    function onCancelHandler (){
        setconfirmPopup(false);
    }
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
            </div>
            
        )
    }
    return (
        <div className={chef.orderStatePopup}>
            <button onClick={()=>confirmPopupHandler("Doing")} className={chef.acceptOrder}>Nhận đơn</button>
            <button onClick={()=>confirmPopupHandler("Done")} className={chef.finishOrder}>Hoàn thành</button>
            <button onClick={()=>confirmPopupHandler("Canceled")} className={chef.cancelOrder}>Hủy đơn</button>
            {confirmPopup && <ConfirmState status={statusButton} onConfirm={onConfirmHandler} onCancel={onCancelHandler}/>}
        </div>
    )
}

export default OrderStatePopup

import React from "react";
import chef from "./Chef.module.css";
import { useState } from "react";
import OrderStatePopup from "./OrderStatePopup";
// import classname from 'classname'
//

function OrderCard(props) {

    function translate(status) {
        if (status === "done") return "Hoàn thành";
        else if (status === "pending") return "Đang chờ";
        else if (status === "canceled") return "Đã hủy";
        else if (status === "doing") return "Đang thực hiện";
    }

    const [chooseStatePopup, setchooseStatePopup] = useState(false);
    
    function chooseStatePopHandler(){
        if (!chooseStatePopup) setchooseStatePopup(true);
        else setchooseStatePopup(false);
    }
    function acceptHandler(){
        setchooseStatePopup(false)
    }
    function cancelHandler(){
        setchooseStatePopup(false)
    }
    function finishHandler(){
        setchooseStatePopup(false)
    }
    function chooseStateHideHandler(status)
    {
        setchooseStatePopup(false);

    }
    function getStatus(status) {
        if (status === "done") return chef.done;
        if (status === "pending") return chef.pending;
        if (status === "canceled") return chef.canceled;
        if (status === "doing") return chef.doing;
    }


    return (
        <div className={chef.orderCard}>
            <div className={chef.orderCardID}>#{props.id}</div>
            <div className={chef.orderCardTime}>{props.time}</div>
            <div className={chef.orderCardName}>{props.name}</div>
            <div className={chef.orderCardPrice}>{props.price}đ</div>
            <div className={chef.orderCardStatus}>
                <div
                    className={`${chef.statusDisplay} ${getStatus(
                        props.status
                    )}`}
                >
                    {translate(props.status)}
                </div>
            </div>
            <div className={chef.orderUpdateState}>
                <button onClick={chooseStatePopHandler} className={chef.changeStateButton}>
                    <span class="material-icons-outlined">more_horiz</span>
                    {/* {chooseStatePopup && <OrderStatePopup onAccept={acceptHandler} onCancel={cancelHandler} onFinish={finishHandler}/>} */}
                </button>
            </div>
            {/* {chooseStatePopup && <OrderStatePopup onAccept={acceptHandler} onCancel={cancelHandler} onFinish={finishHandler}/>} */}
            {chooseStatePopup && <OrderStatePopup onChooseState={chooseStateHideHandler}/>}
            {/* <OrderStatePopup/> */}
        </div>
    );
}
export default OrderCard;

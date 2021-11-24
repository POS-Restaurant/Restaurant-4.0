import React,{ useState} from 'react';
import chef from "./Chef.module.css";
import OrderStatePopup from "./OrderStatePopup";
import OrderDetail from "./OrderDetail/OrderDetail";


function OrderCard(props) {
    const [popUp, setPopUp] = useState(false);
    localStorage.setItem("currentOrder", props.id);
    function translate(status) {
        if (status === "Done") return "Hoàn thành";
        else if (status === "Pending") return "Đang chờ";
        else if (status === "Canceled") return "Đã hủy";
        else if (status === "Doing") return "Đang thực hiện";
    }

    const [chooseStatePopup, setchooseStatePopup] = useState(false);

    function chooseStatePopHandler() {
        if (!chooseStatePopup) setchooseStatePopup(true);
        else setchooseStatePopup(false);
    }
    function chooseStateHideHandler() {
        setchooseStatePopup(false);
        props.onChange();
    }
    function getStatus(status) {
        if (status === "Done") return chef.done;
        if (status === "Pending") return chef.pending;
        if (status === "Canceled") return chef.canceled;
        if (status === "Doing") return chef.doing;
    }
    const timePurchase = new Date(props.time)
    return (
        <div className={chef.orderCard}>
            <div className={chef.orderCardID} style={{color: "blue", cursor: "pointer"}} onClick={()=>setPopUp(true)}>#{props.id}</div>
            <div className={chef.orderCardTime}>{timePurchase.toString().slice(0, 24)}</div>
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
                {(props.status === "Canceled" || props.status === "Done")? <button
                    onClick={chooseStatePopHandler}
                    className={chef.changeStateButton}
                    disabled
                >
                    <span class="material-icons-outlined">more_horiz</span>
                </button> : <button
                    onClick={chooseStatePopHandler}
                    className={chef.changeStateButton}
                >
                    <span class="material-icons-outlined">more_horiz</span>
                </button>}
            </div>
            {chooseStatePopup && (
                <OrderStatePopup total={props.total} customer={props.customer} onChooseState={chooseStateHideHandler} currentStatus={props.status}/>
            )}
            {popUp&&<OrderDetail 
                onHide={()=>setPopUp(false)}
                name={props.name}
                id={props.id}
                time={props.time}
                total={props.total}
                listFood = {props.listFood}
                listNum = {props.listNum}
                listNote = {props.listNote}
            />}
        </div>
    );
}
export default OrderCard;

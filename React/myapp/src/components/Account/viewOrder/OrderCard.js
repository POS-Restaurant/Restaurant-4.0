import React,{ useState} from 'react';
import listOrder from "./listOrder.module.css"
import OrderDetail from "./OrderDetail";


function OrderCard(props) {
    const [popUp, setPopUp] = useState(false);

    function translate(status) {
        if (status === "Done") return "Hoàn thành";
        else if (status === "Pending") return "Đang chờ";
        else if (status === "Canceled") return "Đã hủy";
        else if (status === "Doing") return "Đang thực hiện";
    }

    function getStatus(status) {
        if (status === "Done") return listOrder.done;
        if (status === "Pending") return listOrder.pending;
        if (status === "Canceled") return listOrder.canceled;
        if (status === "Doing") return listOrder.doing;
    }
    const timePurchase = new Date(props.timePurchase)
    const timeReceipt = new Date(props.timeReceipt)
    return (
        <div className={listOrder.orderCard}>
            <div className={listOrder.orderCardID} style={{color: "blue", cursor: "pointer"}} onClick={()=>setPopUp(true)}>#{props.id}</div>
            <div className={listOrder.orderCardTime}>{timePurchase.toString().slice(0, 24)}</div>
            <div className={listOrder.orderCardTime}>{props.status === "Done" ? timeReceipt.toString().slice(0, 24) : ""}</div>
            <div className={listOrder.orderCardPrice}>{props.price}đ</div>
            <div className={listOrder.orderCardStatus}>
                <div
                    className={`${listOrder.statusDisplay} ${getStatus(
                        props.status
                    )}`}
                >
                    {translate(props.status)}
                </div>
            </div>
            {popUp&&<OrderDetail 
                onHide={()=>setPopUp(false)}
                name={props.name}
                id={props.id}
                timePurchase={timePurchase.toString().slice(0, 24)}
                timeReceipt={timeReceipt.toString().slice(0, 24)}
                status={props.status}
                total={props.total}
                listFood = {props.listFood}
                listNum = {props.listNum}
                listNote = {props.listNote}
            />}
        </div>
    );
}
export default OrderCard;

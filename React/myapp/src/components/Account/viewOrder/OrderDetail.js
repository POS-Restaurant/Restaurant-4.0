import React, { useState, useEffect } from "react";
import axios from "axios";
import detailOrder from "./OrderDetail.module.css";
import OrderDetailCard from "./OrderDetailCard";
//
function OrderDetail(props) {
    const [foods, setFoods] = useState([]);
    const idRes = localStorage.getItem("currentRes");
    const checkData = async () => {
        await axios.get("http://localhost:3000/Food/get/list_food_res", { params: { id: idRes } }).then((res) => {
        setFoods(res.data.results);
      });
    };
    useEffect(() => {
        setTimeout(() => {
            checkData();
        }, 1500);
    }, []);
    function searchFood(data) {
        let arr = [];
        if (foods && data) {
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < foods.length; j++) {
                    if (data[i] === foods[j]._id) arr.push(foods[j]);
                }
            }
        }
        return arr;
    }

    return (
        <div className={detailOrder.orderDetail}>
            <div className={detailOrder.generalDetail}>
                <button className={detailOrder.btnClose} onClick={props.onHide}>
                    X
                </button>
                <span className={detailOrder.orderId}> Mã đơn hàng: {props.id} </span>
                <span className={detailOrder.timeOrder}>
                    <p>Thời gian đặt hàng: {props.timePurchase}</p>
                    <p>{props.status === "Done" && "Thời gian nhận hàng:" + props.timeReceipt}</p>
                </span>
                <span className={detailOrder.customerName}>
                    Tên khách hàng: {props.name}
                </span>
            </div>
            <div className={detailOrder.orderDetailList}>
                <div className={detailOrder.detailInfoBar}>
                    <div className={detailOrder.product}>Món</div>
                    <div className={detailOrder.price}>Giá</div>
                    <div className={detailOrder.quantity}>Số lượng</div>
                    <div className={detailOrder.note}>Ghi chú</div>
                    <div className={detailOrder.tempPay}>Tạm tính</div>
                </div>
                <div className={detailOrder.infoList}>
                    {searchFood(props.listFood).map((item, index) => {
                        return (
                            <OrderDetailCard
                                key={index}
                                food={item}
                                num={props.listNum[index]}
                                note={props.listNote[index]}
                            />
                        );
                    })}
                </div>
            </div>
            <div className={detailOrder.total}>
                Tổng tiền:{" "}
                <span className={detailOrder.totalPay}> {props.total} VNĐ </span>
            </div>
        </div>
    );
}

export default OrderDetail;

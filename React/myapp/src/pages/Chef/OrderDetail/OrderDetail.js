import React, { useState, useEffect } from "react";
import axios from "axios";
import detail from "./OrderDetail.module.css";
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
    console.log(foods);
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
        <div className={detail.orderDetail}>
            <div className={detail.generalDetail}>
                <button className={detail.btnClose} onClick={props.onHide}>
                    X
                </button>
                <span className={detail.orderId}>Mã đơn hàng: {props.id} </span>
                <span className={detail.timeOrder}>
                    Thời gian đặt hàng: {props.time}
                </span>
                <span className={detail.customerName}>
                    Tên khách hàng: {props.name}
                </span>
            </div>
            <div className={detail.orderDetailList}>
                <div className={detail.detailInfoBar}>
                    <div className={detail.product}>Món</div>
                    <div className={detail.price}>Giá</div>
                    <div className={detail.quantity}>Số lượng</div>
                    <div className={detail.note}>Ghi chú</div>
                    <div className={detail.tempPay}>Tạm tính</div>
                </div>
                <div className={detail.infoList}>
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
            <div className={detail.total}>
                Tổng tiền:{" "}
                <span className={detail.totalPay}> {props.total} VNĐ </span>
            </div>
        </div>
    );
}

export default OrderDetail;

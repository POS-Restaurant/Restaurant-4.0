import React from "react";
import detail from "./OrderDetail.module.css";
import OrderDetailCard from "./OrderDetailCard";
//
function OrderDetail(props) {
    return (
        <div className={detail.orderDetail}>
            <button className={detail.btnClose} onClick={props.onHide}>X</button>
            <div className={detail.generalDetail}>
                <span className={detail.orderId}>Mã đơn hàng: #123456789</span>
                <span className={detail.timeOrder}>
                    Thời gian đặt hàng: 01/01/2021 10:45AM
                </span>
                <span className={detail.customerName}>
                    Tên khách hàng: Hồng Phúc
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
                <OrderDetailCard />
                <OrderDetailCard />
            </div>
            <div className={detail.total}>Tổng tiền: <span className={detail.totalPay}>400000đ</span></div>
        </div>
    );
}

export default OrderDetail;

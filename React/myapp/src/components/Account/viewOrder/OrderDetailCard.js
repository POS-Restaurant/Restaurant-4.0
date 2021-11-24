import React from 'react'
import detailOrder from './OrderDetail.module.css'
//
function OrderDetailCard(props) {
    return (
        <div className={detailOrder.orderDetailCard}>
            <div className={detailOrder.product}>
                <div className={detailOrder.productPic}>
                    <img src={props.food.img + ".png"} alt="ImgFood" height="100px" width="80px" />
                </div>
                <div className={detailOrder.productName}>
                    {props.food.name}
                </div>
            </div>
            <div className={detailOrder.price}>
                {props.food.price} VNĐ
            </div>
            <div className={detailOrder.quantity}>
                {props.num}
            </div>
            <div className={detailOrder.note}>
                {props.note}
            </div>
            <div className={detailOrder.tempPay}>
                {props.num * props.food.price} VNĐ
            </div>
        </div>
    )
}

export default OrderDetailCard

import React from 'react'
import detail from './OrderDetail.module.css'
//
function OrderDetailCard(props) {
    return (
        <div className={detail.orderDetailCard}>
            <div className={detail.product}>
                <div className={detail.productPic}>
                    <img src={props.food.img + ".png"} alt="ImgFood" height="100px" width="80px" />
                </div>
                <div className={detail.productName}>
                    {props.food.name}
                </div>
            </div>
            <div className={detail.price}>
                {props.food.price} VNĐ
            </div>
            <div className={detail.quantity}>
                {props.num}
            </div>
            <div className={detail.note}>
                {props.note}
            </div>
            <div className={detail.tempPay}>
                {props.num * props.food.price} VNĐ
            </div>
        </div>
    )
}

export default OrderDetailCard

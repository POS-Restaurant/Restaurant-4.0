import React from 'react'
import detail from './OrderDetail.module.css'
//
function OrderDetailCard(data, num, note) {
    return (
        <div className={detail.orderDetailCard}>
            <div className={detail.product}>
                <div className={detail.productPic}>

                </div>
                <div className={detail.productName}>
                    {data.name}
                </div>
            </div>
            <div className={detail.price}>
                {data.price}
            </div>
            <div className={detail.quantity}>
                {num}
            </div>
            <div className={detail.note}>
                {note}
            </div>
            <div className={detail.tempPay}>
                {num * data.price}
            </div>
        </div>
    )
}

export default OrderDetailCard

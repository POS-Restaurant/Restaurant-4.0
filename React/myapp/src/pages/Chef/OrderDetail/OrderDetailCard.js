import React from 'react'
import detail from './OrderDetail.module.css'
//
function OrderDetailCard() {
    return (
        <div className={detail.orderDetailCard}>
            <div className={detail.product}>
                <div className={detail.productPic}>

                </div>
                <div className={detail.productName}>
                    Một món gì đó tên rất dài (size M)
                </div>
            </div>
            <div className={detail.price}>
                100000đ
            </div>
            <div className={detail.quantity}>
                2
            </div>
            <div className={detail.note}>
                1 phần không giá, 1 phần không dưa leo
            </div>
            <div className={detail.tempPay}>
                200000đ
            </div>
        </div>
    )
}

export default OrderDetailCard

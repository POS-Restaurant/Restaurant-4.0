import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import dataOrder from '../ratingCpn/data'
import ItemOrder from './itemOrder'
import './tableOrder.css'
function TableOrder() {
    return (
        <div className="tableOrder">
            <div className="titleCol">
                Thông tin của các đơn hàng đã mua
            </div>
            <div className="subtitleCol" style={{display: 'flex'}}>
                <p style={{width: "15%"}}>Id</p>
                <p style={{width: "15%"}}>Ngày đặt hàng</p>
                <p style={{width: "15%"}}>Ngày nhận hàng</p>
                <p style={{width: "20%"}}>Nhà hàng</p>
                <p style={{width: "15%"}}>Tổng tiền</p>
            </div>
            <div style={{height: "500px"}}>
                <Scrollbars>
                    {dataOrder.filter(val => val.stateOrder === 2).map((item, index)=>{
                        return(
                            <div key={index}>
                                <ItemOrder
                                id = {index+1}
                                dateOrder = {item.dateOrder}
                                dateRecv = {item.dateRecv}
                                stateOrder = {item.stateOrder}
                                listFood = {item.listFood}
                                res = {item.res}
                                />
                            </div>
                        )
                    })}
                </Scrollbars>
            </div>
        </div>
    )
}

export default TableOrder

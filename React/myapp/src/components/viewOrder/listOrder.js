import React from 'react'
import ItemOrder from './itemOrder'
import './viewOrder.css'
import datas from './dataOrder'
import { Scrollbars } from 'react-custom-scrollbars';


function ListOrder() {
    var list = datas;
    const newOrders = datas.filter(data => data.stateOrder === 1)
    return (
        <div className="list-order">
            <div className="btn-state-order" style={{display:'flex'}}>
                <p id="btn-new" onClick={()=>{list = datas.filter(data => data.stateOrder === 1)}} >Đơn hàng mới</p>
                <p id="btn-recv" onClick={()=>{}}>Đơn hàng đã nhận</p>
            </div>
            <div className="nameCol">
                <div className="numOfOrder" style={{width: "250px"}}>
                    <p>Số thứ tự</p>
                </div>
                <div className="dateBuyOfOrder" style={{width: "250px"}}>
                    <p>Ngày đặt hàng</p>
                </div>
                <div className="dateRecvOfOrder" style={{width: "250px"}}>
                    <p>Ngày nhận hàng</p>
                </div>
                <div className="totalBillOfOrder" style={{width: "200px"}}>
                    <p>Tổng tiền</p>
                </div>
                <div className="stateOfOrder" style={{width: "300px"}}>
                    <p>Trạng thái đơn hàng</p>
                </div>
            </div>
            <div style={{height: "500px"}}>
                <Scrollbars>
                    {list.map((item, index) => {
                        return(
                            <div key={index}>
                                <ItemOrder 
                                    id = {index + 1}
                                    dateOrder={item.dateOrder}
                                    dateRecv={item.dateRecv}
                                    totalBill={item.totalBill}
                                    stateOrder={item.stateOrder}
                                />
                            </div>
                        )
                    })}
                </Scrollbars>
            </div>
        </div>
    )
}

export default ListOrder;
